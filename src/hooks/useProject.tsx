import { useState, useEffect, useCallback } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/lib/projects";

export const useProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProjects = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getProjects();
      setProjects(data);
      console.log(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unable to fetch Project");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const addProject = useCallback(
    async (data: { name: string; description?: string }) => {
      try {
        const newProject = await createProject(data);
        setProjects((prev) => [...prev, newProject]);
      } catch (err) {
        setError("Failed to create project");
      }
    },
    [],
  );

  const editProject = useCallback(
    async (id: number, data: { name?: string; description?: string }) => {
      const updated = await updateProject(id, data);

      setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)));
    },
    [],
  );

  const removeProject = useCallback(async (id: number) => {
    await deleteProject(id);

    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return {
    projects,
    loading,
    error,
    loadProjects,
    addProject,
    editProject,
    removeProject,
  };
};
