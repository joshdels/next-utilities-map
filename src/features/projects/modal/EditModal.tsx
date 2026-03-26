"use client";

import { useEffect, useState } from "react";
import { ProjectProps } from "@/lib/projects";
import { X, Image as ImageIcon, FileText, Trash2, Upload } from "lucide-react";

interface EditModalProps {
  name: string;
  open: boolean;
  onClose: () => void;
  onConfirm: (data: ProjectProps) => void;
}

export default function EditModal({
  name,
  open,
  onClose,
  onConfirm,
}: EditModalProps) {
  const [projectName, setProjectName] = useState(name);
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (open) {
      setProjectName(name);
    }
  }, [name, open]);

  if (!open) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    onConfirm({
      name: projectName,
      description,
      logo,
      // files,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-md bg-white shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h1 className="text-xl font-semibold text-gray-800">Edit Project</h1>
          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-1 gap-8 px-6 py-6 md:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* NAME */}
            <div className="space-y-2">
              <label className="font-bold text-gray-500">Project Name</label>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project title..."
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* LOGO */}
            <div className="space-y-5">
              <label className="mb-2 font-bold text-gray-500">
                Project Logo
              </label>

              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50">
                  <ImageIcon className="h-6 w-6 text-gray-400" />
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    Recommended 512 x 512px
                  </p>
                  <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
                    <Upload className="h-4 w-4" />
                    Upload Logo
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (!e.target.files) return;
                        setLogo(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            {/* DESCRIPTION */}
            <div className="space-y-2">
              <label className="font-bold text-gray-500">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe the project..."
                rows={4}
                className="w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* FILE UPLOAD */}
            <div className="space-y-5">
              <label className="font-bold text-gray-500">Project Files</label>

              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
                <Upload className="h-4 w-4" />
                Add Files
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* FILE LIST */}
              {files.length > 0 && (
                <div className="max-h-40 space-y-2 overflow-y-auto pr-1">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 px-3 py-2"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="h-4 w-4 text-gray-400" />
                        <span className="truncate text-xs text-gray-600">
                          {file.name}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFile(index)}
                        className="p-1 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-md border border-gray-300 px-5 py-2 text-sm text-gray-500 transition hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Save Project
          </button>
        </div>
      </div>
    </div>
  );
}
