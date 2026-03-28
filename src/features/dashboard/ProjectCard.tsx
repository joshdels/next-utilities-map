import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import DeleteModal from "./modal/DeleteModal";
import EditModal from "./modal/EditModal";
import { formatDate } from "@/utils/date";
import { ProjectProps } from "@/lib/projects";
import { ImageIcon } from "lucide-react";
import { launch24, pencil24, trash24 } from "@esri/calcite-ui-icons";

interface ProjectCardProps {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
  files: File[];
  onDelete: () => void;
  onEdit: (id: number, data: ProjectProps) => void;
}

interface ButtonProps {
  icon: string;
  action: () => void;
}

export default function ProjectCard({
  id,
  name,
  date,
  image,
  description,
  onDelete,
  files,
  onEdit,
}: ProjectCardProps) {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();

  const handleEdit = (data: ProjectProps) => {
    onEdit(id, data);
    setShowEdit(false);
  };

  const showEditButton = () => {
    setShowEdit(true);
  };

  const handleLaunch = () => {
    router.push(`/dashboard/map/${id}`);
  };

  const handleDelete = () => {
    setShowDelete(true);
  };

  const navigationButtons: ButtonProps[] = [
    {
      icon: pencil24,
      action: showEditButton,
    },
    { icon: launch24, action: handleLaunch },
    { icon: trash24, action: handleDelete },
  ];

  return (
    <div className="rounded-md bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm uppercase">{formatDate(date)}</span>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md">
          {image ? (
            <Image
              loading="lazy"
              src={image}
              alt={name}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50">
              <ImageIcon className="h-8 w-8 text-gray-400" />
            </div>
          )}
        </div>

        <div>
          <h2 className="text font-semibold text-gray-800 uppercase">{name}</h2>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-2 px-10">
        {navigationButtons.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="rounded p-2 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d={item.icon} />
            </svg>
          </button>
        ))}
      </div>

      {showDelete && (
        <DeleteModal
          open={showDelete}
          name={name}
          onClose={() => setShowDelete(false)}
          onConfirm={onDelete}
        />
      )}

      {showEdit && (
        <EditModal
          open={showEdit}
          name={name}
          imageUrl={image}
          files={files}
          description={description}
          onClose={() => setShowEdit(false)}
          onConfirm={handleEdit}
        />
      )}
    </div>
  );
}
