import { FileUp, MapPinned, RotateCw, Wrench } from "lucide-react";
import { CardProps } from "@/shared/components/card/Card";

export const process: CardProps[] = [
  {
    title: "Share Your Files",
    icon: FileUp,
    definition:
      "Drop your CAD, PDF, or GIS files. We flag the layers that matter — pipes, valves, meters — and note what needs fixing before we touch anything.",
  },
  {
    title: "We Clean & Convert",
    icon: RotateCw,
    definition:
      "Georeferencing, topology fixes, and proper structure — not just exported shapes. You get a real GIS network, ready to work with.",
  },
  {
    title: "Get Your Live Map",
    icon: MapPinned,
    definition:
      "One clear map for operations, planning, and field crews. No steep learning curve, no cluttered dashboards - just the view your team needs",
  },
  {
    title: "We Handle the Rest",
    icon: Wrench,
    definition:
      "Hosting, storage, updates, and ongoing maintenance — all included if you want it. If not, the data is fully yours to take anywhere.",
  },
];
