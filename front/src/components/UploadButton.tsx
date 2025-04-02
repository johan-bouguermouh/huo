"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Upload } from "lucide-react";
import { useRessources } from "@/hooks/useRessource";
import type { CloudinaryResource } from "@cloudinary-util/types";

export default function UploadButton() {
  const { addResource } = useRessources({ disablefetch: true });

  return (
    <CldUploadButton
      uploadPreset="ujo_test"
      options={{
        autoMinimize: true,
        tags: ["media"],
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#06192F",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#637C98",
            action: "#FF620C",
            inactiveTabIcon: "#919396",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1",
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true,
            },
          },
        },
      }}
      onSuccess={(results) => {
        addResource([results.info] as CloudinaryResource[]);
      }}
    >
      <span className="flex items-center gap-2">
        <Upload className="w-4 h-4" />
        Upload
      </span>
    </CldUploadButton>
  );
}
