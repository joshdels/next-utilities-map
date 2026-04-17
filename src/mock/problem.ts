import { CircleQuestionMark, Clock2, FileX, Folders } from "lucide-react";
import { CardProps } from "@/shared/components/card/Card";
import { FiUserMinus } from "react-icons/fi";

export const problems: CardProps[] = [
  {
    title: "Outdated printed maps",
    icon: FileX,
    definition:
      "Field crews decide off maps from years ago — no one knows what's changed since.",
  },
  {
    title: "Audits that take days",
    icon: Clock2,
    definition:
      "Files nobody else can open get dug through manually — and your engineer is on vacation.",
  },
  {
    title: "New staff locked out",
    icon: FiUserMinus,
    definition:
      "New hires can't access or read the network — onboarding stalls before it starts.",
  },
  {
    title: "Missing network assets",
    icon: CircleQuestionMark,
    definition:
      "A valve off the map stays closed too long — one missing asset in an emergency costs thousands.",
  },
];
