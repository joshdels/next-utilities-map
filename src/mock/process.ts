import { FileUp, MapPinned, RefreshCw, Wrench } from "lucide-react";
import { CardProps } from "@/shared/components/card/Card";

export const process: CardProps[] = [
  {
    title: "Share Your Files",
    icon: FileUp,
    definition: "Upload your CAD, PDF, or GIS files",
    steps: [
      "Identify the layers that matter most such as pipes, valves, meters.",
      "We flag what needs cleanup before conversion begins.",
    ],
  },
  {
    title: "We Clean & Convert",
    icon: RefreshCw,
    definition: "Preprocess and build a clean GIS network",
    steps: [
      "Georeference your CAD or PDF files.",
      "Convert to a consistent GIS schema.",
      "Fix topology and connectivity issues.",
    ],
  },
  {
    title: "Get Your Live Map",
    icon: MapPinned,
    definition: "A simple WebGIS viewer built for your team",
    steps: [
      "One clear map for operations, planning, and field crews.",
      "Focused on clarity, no messy dashboards.",
    ],
  },
  {
    title: "We Handle the Rest",
    icon: Wrench,
    definition: "Ongoing maintenance, storage, and hosting",
    steps: [
      "We manage your files, updates, and ongoing changes.",
      "Database storage and cloud hosting included.",
      "A clean, maintained WebGIS without the complication.",
    ],
  },
];
