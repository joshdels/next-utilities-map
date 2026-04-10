import { ConverterCardProps } from "@/shared/components/card/Converter";
import { FileStack, Settings, ShieldCheck, Zap } from "lucide-react";

export const converters: ConverterCardProps[] = [
  {
    title: "dxf",
    subname: "DXF Converter",
    definition:
      "DXF is a common format for Computer Aided Design (CAD). It is developed by Autodesk and it is similar to the DWG format but it is more compatible with other software packages since it is open documented.",
  },
  {
    title: "gpkg",
    subname: "Geopackage Converter",
    definition:
      "Geopackage is a compressed Geographic Information System (GIS) file type used for mapping",
  },
];

export const features: ConverterCardProps[] = [
  {
    title: "formats Supported",
    definition: "We suppport this type of data",
    icon: FileStack,
  },
  {
    title: "high-quality conversion",
    definition: "Besides using the stable open source software under the hood",
    icon: Settings,
  },
  {
    title: "data security",
    definition:
      "No one excepts you will ever have access to your files. Data are encrypted and temporary and the moment you close your browser its not gone",
    icon: ShieldCheck,
  },
  {
    title: "powerful api",
    definition: "This allows custom integration with you own app",
    icon: Zap,
  },
];
