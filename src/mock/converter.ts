import { ConverterCardProps } from "@/shared/components/card/Converter";
import { FileStack, Settings, ShieldCheck, Zap } from "lucide-react";

export const converters: ConverterCardProps[] = [
  {
    title: "dxf",
    subname: "DXF Converter",
    definition:
      "DXF (Drawing Exchange Format) is an open CAD format developed by Autodesk for interoperability between design tools. Unlike the proprietary DWG format, DXF is openly documented and widely supported across CAD and GIS software.",
  },
  {
    title: "gpkg",
    subname: "GeoPackage Converter",
    definition:
      "GeoPackage (GPKG) is an open, standards-based format for storing and transferring geospatial data. Built on SQLite, it supports vector features, raster tiles, and attribute data in a single portable file thus making it the preferred exchange format for modern GIS workflows.",
  },
];

export const features: ConverterCardProps[] = [
  {
    title: "Multiple Formats Supported",
    definition:
      "Convert between the most common CAD and GIS formats used in infrastructure and engineering workflows, including DXF, DWG, GeoPackage, Shapefile, and GeoJSON.",
    icon: FileStack,
  },
  {
    title: "High-Quality Conversion",
    definition:
      "Built on proven open-source libraries to ensure geometry integrity, attribute fidelity, and consistent coordinate handling across every conversion.",
    icon: Settings,
  },
  {
    title: "Data Security",
    definition:
      "Your files are encrypted in transit, processed in isolated sessions, and permanently deleted when your session ends. No data is stored, shared, or logged.",
    icon: ShieldCheck,
  },
  {
    title: "Powerful API",
    definition:
      "Integrate conversions directly into your own applications via our REST API. Automate CAD to GIS pipelines without manual file handling.",
    icon: Zap,
  },
];
