const BASE_URL =
  "https://infralens-backend.topmapsolutions.com/customer/inquiries/";

export const submitInquiries = async (formData: FormData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to submit");
  }

  return await res.json();
};
