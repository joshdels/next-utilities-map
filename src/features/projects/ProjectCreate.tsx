import { plus24 } from "@esri/calcite-ui-icons";
import { useState } from "react";
import CreateProjectModal from "./modal/CreateModal";

export default function ProjectCreate() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="w-full sm:w-auto">
      <button
        onClick={() => setShowCreate(true)}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 sm:w-auto"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d={plus24} />
        </svg>
        Create New Project
      </button>

      {showCreate && (
        <CreateProjectModal
          open={showCreate}
          onClose={() => setShowCreate(false)}
          onConfirm={() => {
            console.log("Created Project");
            setShowCreate(false);
          }}
        />
      )}
    </div>
  );
}
