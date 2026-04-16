import { useState } from "react";
import { submitInquiries } from "@/lib/inquires";

const MAX_FILE_SIZE = 50 * 1024 * 1024;

export const useInquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [captchaToken, setCaptchaToken] = useState("");

  const validate = () => {
    if (!name.trim()) return "Full name is required";
    if (!email.trim()) return "Email is required";
    if (!message.trim()) return "Message is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";

    if (file && file.size > MAX_FILE_SIZE) {
      return "File must be 50MB or smaller";
    }

    return null;
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFile(null);
    setError(null);
  };

  const handleSubmit = async (
    e?: React.SubmitEvent<HTMLFormElement>,
    captchaToken?: string,
  ) => {
    if (e) e.preventDefault();

    if (!captchaToken) {
      setError("Please verify you're human");
      return;
    }

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("captcha", captchaToken);
    formData.append("full_name", name.trim());
    formData.append("email", email.trim());
    formData.append("inquires", message.trim());

    if (file) {
      formData.append("files", file);
    }

    try {
      const res = await submitInquiries(formData);

      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return res;
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    email,
    message,
    file,
    setName,
    setEmail,
    setMessage,
    setFile,

    handleSubmit,
    reset,

    loading,
    error,
    success,

    captchaToken,
    setCaptchaToken,
  };
};
