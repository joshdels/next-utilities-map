import { Clock2, FileX, Folders } from "lucide-react";
import { CardProps } from "@/shared/components/card/Card";
import { FiUserMinus } from "react-icons/fi";

export const problems: CardProps[] = [
  {
    title: "Outdated printed maps",
    icon: FileX,
    definition:
      "Field crews making decisions off maps from three years ago — no way to know what changed.",
  },
  {
    title: "Audits take days",
    icon: Clock2,
    definition:
      "Someone manually digs through files nobody else can open — and your engineer is on vacation.",
  },
  {
    title: "New staff locked out",
    icon: FiUserMinus,
    definition:
      "New hires can't access or understand the network — onboarding slows down before it starts.",
  },
  {
    title: "GIS team in backlog",
    icon: Folders,
    definition:
      "Your specialists buried in format conversions instead of doing the real infrastructure work.",
  },
];
