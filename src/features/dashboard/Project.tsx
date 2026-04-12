import ProjectCard from "./ProjectCard";
import ProjectSearch from "./ProjectSearch";
import ProjectCreate from "./ProjectCreate";
import { useProjects } from "@/hooks/api/useProject";
import { ProjectProps } from "@/lib/projects";

export default function Projects() {
  const { projects, addProject, editProject, removeProject, loading, error } =
    useProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleDelete = (id: number) => {
    removeProject(id);
  };

  const handleEdit = (id: number, data: ProjectProps) => {
    editProject(id, data);
  };

  return (
    <div className="h-[94vh] bg-gray-100 p-6">
      <div className="my-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-150">{/* <ProjectSearch /> */}</div>

        <div className="w-full sm:w-auto">
          <ProjectCreate onCreate={addProject} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            date={project.created_at}
            image={project.logo}
            files={project.file}
            onDelete={() => handleDelete(project.id)}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
