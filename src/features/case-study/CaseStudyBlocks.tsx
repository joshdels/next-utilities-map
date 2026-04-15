import Image from "next/image";
import styles from "./CaseStudyBlocks.module.css";

type BlockProps = {
  blocks: any[];
};

function renderBlock(block: any) {
  switch (block.block_type) {
    case "heading":
      return (
        <h2 key={block.id} className={styles.heading}>
          {block.text}
        </h2>
      );

    case "text":
      return (
        <p key={block.id} className={styles.text}>
          {block.text}
        </p>
      );

    case "image":
      return (
        <div key={block.id} className={styles.image}>
          <Image
            src={block.image || ""}
            alt={block.text || "image"}
            width={1200}
            height={700}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      );

    case "quote":
      return (
        <blockquote key={block.id} className={styles.quote}>
          {block.text}
        </blockquote>
      );

    default:
      return null;
  }
}

export default function CaseStudyBlocks({ blocks }: BlockProps) {
  return (
    <div className={styles.container}>
      {blocks
        ?.slice()
        .sort((a, b) => a.order - b.order)
        .map(renderBlock)}
    </div>
  );
}
