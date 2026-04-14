"use client";

import { useState, useEffect, useMemo } from "react";
import { caseStudies, caseStudy } from "@/lib/case-study";

interface StudiesProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  image?: string;
  isHighlight?: boolean;
  date: string;
}

interface Block {
  id: number;
  block_type: "image" | "text" | "quote" | "heading";
  text?: string;
  image?: string;
  order: number;
}

interface StudyDetail {
  id: number;
  title: string;
  tags: string[];
  description: string;
  image?: string;
  isHighlight?: boolean;
  created_at: string;
  blocks: Block[];
}

export function useCaseStudies() {
  const [studies, setStudies] = useState<StudiesProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);

      try {
        const data = await caseStudies();

        if (isMounted) {
          setStudies(data);
        }
      } catch (err) {
        if (isMounted) setError("Failed to load case study");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const highlight = useMemo(
    () => studies.filter((s) => s.isHighlight),
    [studies],
  );
  const normal = useMemo(
    () => studies.filter((s) => !s.isHighlight),
    [studies],
  );
  return {
    studies,
    highlight,
    normal,
    loading,
    error,
  };
}

export function useCaseStudy(id: number) {
  const [study, setStudy] = useState<StudyDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        const data = await caseStudy(id);

        if (isMounted) {
          setStudy(data);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { study, loading };
}
