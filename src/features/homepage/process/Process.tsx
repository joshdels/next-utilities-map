import { FileUp, MapPinned, RefreshCw, Wrench } from "lucide-react";
import Card, { CardProps } from "../_components/Card";
import "@/shared/styles/wrappers.css";
import styles from "./Process.module.css";

const process: CardProps[] = [
  {
    title: "Upload Your File",
    icon: FileUp,
    definition: "Upload Your CAD, PDF, or GIS Files",
    steps: [
      "Identify which layers/objects matter most (pipes, valves, meters).",
      "Clean up symbology and attributes so they translate well into GIS.",
    ],
  },
  {
    title: "We Pre Processing",
    icon: RefreshCw,
    definition: "Preprocess and Build a Clean GIS Network",
    steps: [
      "Georeference your old CAD or PDF files.",
      "Convert CAD → GIS into a consistent schema.",
      "Fix obvious topology and connectivity issues.",
    ],
  },
  {
    title: "Your Interactive Map",
    icon: MapPinned,
    definition: "Put a Simple WebGIS Viewer on Top",
    steps: [
      "One easy-to-use map for operations, planning, and field crews.",
      "Focus on clarity over complicated dashboards.",
    ],
  },
  {
    title: "We Maintain",
    icon: Wrench,
    definition: "Relax While We Maintain",
    steps: [
      "We manage your files, updates, and ongoing changes.",
      "We handle database storage and cloud hosting.",
      "You get a clean, maintained WebGIS network without the headache.",
    ],
  },
];

export default function ProcessSection() {
  return (
    <div className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <h1 className={styles["process-title"]}>
            With our Four simple Pillar Processing
          </h1>

          <div className={styles["process-tagline"]}>
            Save teams a lot of headaches in terms of time, high license costs
            from other tools and errors.
          </div>

          <div className={styles["container-card"]}>
            {process.map((item, index) => (
              <Card key={index} index={index + 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
