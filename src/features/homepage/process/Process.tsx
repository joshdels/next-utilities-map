import Card, { CardProps } from "../_components/Card";
import styles from "./Process.module.css";

const process: CardProps[] = [
  {
    title: "Upload Your File",
    definition: "Upload Your CAD, PDF, or GIS Files",
    steps: [
      "Identify which layers/objects matter most (pipes, valves, meters).",
      "Clean up symbology and attributes so they translate well into GIS.",
    ],
  },
  {
    title: "Pre Processing",
    definition: "Preprocess and Build a Clean GIS Network",
    steps: [
      "Georeference your old CAD or PDF files.",
      "Convert CAD → GIS into a consistent schema.",
      "Fix obvious topology and connectivity issues.",
    ],
  },
  {
    title: "Interactive Map",
    definition: "Put a Simple WebGIS Viewer on Top",
    steps: [
      "One easy-to-use map for operations, planning, and field crews.",
      "Focus on clarity over complicated dashboards.",
    ],
  },
  {
    title: "Maintenance",
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
    <div className={styles.container}>
      <h1 className={styles["process-text"]}>
        With our Four simple Pillar Processing
      </h1>

      <div className={styles["container-card"]}>
        {process.map((item, index) => (
          <Card key={index} index={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
}
