import Image from "next/image";
import { useState } from "react";

import {
  launch24,
  pencil24,
  projectTemplate24,
  trash24,
} from "@esri/calcite-ui-icons";
import DeleteModal from "./modal/DeleteModal";

interface ProjectCardProps {
  name: string;
  date: string;
  image: string;
}

export default function ProjectCard({ name, date, image }: ProjectCardProps) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="rounded-md bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm uppercase">{date}</span>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md">
          <Image
            src={image || projectTemplate24}
            alt={name}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text font-semibold text-gray-800 uppercase">{name}</h2>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-2 px-10">
        <div>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={pencil24} />
          </svg>
        </div>
        <div>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={launch24} />
          </svg>
        </div>
        <div>
          <button onClick={() => setShowDelete(true)}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d={trash24} />
            </svg>
          </button>
        </div>
      </div>

      {showDelete && (
        <DeleteModal
          open={showDelete}
          name={name}
          onClose={() => setShowDelete(false)}
          onConfirm={() => {
            console.log("delete", name);
            setShowDelete(false);
          }}
        />
      )}
    </div>
  );
}
