import { studies } from "@/mock/case-study";

export default function CaseStudyPreview({ id }: { id: string }) {
  const study = studies.find((s) => String(s.id) === id);

  if (!study) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>{study.title}</h1>
      <p>{study.description}</p>
    </div>
  );
}
