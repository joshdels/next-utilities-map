import CaseStudyPreview from "@/features/case-study/CaseStudyPreview";
import NavbarSection from "@/shared/components/navbar/Navbar";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <NavbarSection />
      <CaseStudyPreview id={id} />
    </div>
  );
}
