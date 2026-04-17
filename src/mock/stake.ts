import { CircleQuestionMark, FileX, Folders } from "lucide-react";
import { FiUserMinus } from "react-icons/fi";
import { WiTime4 } from "react-icons/wi";

import { ListProblemProps } from "@/shared/components/list/List";

export const stakes: ListProblemProps[] = [
  {
    title: "Field decisions",
    icon: FileX,
    subtitle: "made off maps from years ago",
  },
  {
    title: "Audit requests",
    icon: WiTime4,
    subtitle: "that take days, not minutes",
  },
  {
    title: "New hires",
    icon: FiUserMinus,
    subtitle: "who can't access or understand the network",
  },
  {
    title: "Utility Asset",
    icon: CircleQuestionMark,
    subtitle: "found only after the emergency",
  },
];
