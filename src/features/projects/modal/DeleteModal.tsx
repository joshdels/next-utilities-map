interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name?: string;
}

export default function DeleteModal({
  open,
  onClose,
  onConfirm,
  name,
}: DeleteModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-md bg-white p-6 shadow-lg">
        <h1 className="text-lg font-semibold text-gray-900">Delete {name}?</h1>

        <p className="mt-2 text-sm text-gray-500">
          This action cannot be undone. This will permanently delete the project
          and all of its data.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
