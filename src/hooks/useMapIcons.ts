"use client";

import { useEffect } from "react";
import type { Map } from "maplibre-gl";
import type { RefObject } from "react";

interface IconOptions {
  iconFolder?: string;
  radius?: number;
  iconScale?: number;
  borderWidth?: number;
  typeColors?: Record<string, string>;
  borderColor?: string;
}

export function useMapIcons(
  mapRef: RefObject<Map | null>,
  nodeData: any,
  options?: IconOptions,
) {
  useEffect(() => {
    const map = mapRef.current;

    if (!map || !nodeData) return;

    const {
      iconFolder = "/icons",
      radius = 16,
      iconScale = 0.6,
      borderWidth = 2,
      typeColors = {},
      borderColor = "#ffffff",
    } = options || {};

    const nodeTypes = new Set<string>();

    nodeData.features.forEach((f: any) => {
      const t = f.properties?.type;
      if (t) nodeTypes.add(t);
    });

    nodeTypes.forEach(async (iconName) => {
      if (map.hasImage(iconName)) return;

      try {
        const res = await fetch(`${iconFolder}/${iconName}.svg`);
        let svgText = await res.text();

        svgText = svgText.replace(/(fill|stroke)=".*?"/g, `$1="#ffffff"`);
        svgText = svgText.replace(
          /<svg/,
          `<svg fill="#ffffff" stroke="#ffffff"`,
        );

        const img = new Image();
        img.src = "data:image/svg+xml;base64," + btoa(svgText);

        img.onload = () => {
          const size = radius * 2;
          const iconSize = size * iconScale;
          const iconOffset = (size - iconSize) / 2;

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d")!;

          canvas.width = size;
          canvas.height = size;

          const bgColor = typeColors[iconName] || "#FF0000";

          // 🎨 background circle
          ctx.fillStyle = bgColor;
          ctx.beginPath();
          ctx.arc(radius, radius, radius - borderWidth, 0, Math.PI * 2);
          ctx.fill();

          // 🟢 border
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = borderWidth;
          ctx.beginPath();
          ctx.arc(radius, radius, radius - borderWidth / 2, 0, Math.PI * 2);
          ctx.stroke();

          // 🧩 icon
          ctx.drawImage(img, iconOffset, iconOffset, iconSize, iconSize);

          // 🚀 add to map
          map.addImage(iconName, {
            width: size,
            height: size,
            data: ctx.getImageData(0, 0, size, size).data,
          });
        };

        img.onerror = () => {
          console.warn(`Failed to load icon: ${iconName}`);
        };
      } catch (err) {
        console.error("Error loading icon", iconName, err);
      }
    });
  }, [mapRef, nodeData, options]);
}
