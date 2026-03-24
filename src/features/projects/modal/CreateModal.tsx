interface CreateProjectModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CreateProjectModal({
  open,
  onClose,
  onConfirm,
}: CreateProjectModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-md bg-white p-6 shadow-lg">
        <h1 className="text-lg font-semibold text-gray-900">
          Create New Project
        </h1>

        <p className="mt-2 text-sm text-gray-500">Create Project!</p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
