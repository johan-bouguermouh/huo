"use client";

import React, { useState } from "react";
import CldImage from "../CldImage";
import { ResourceType } from "cloudinary";
import { RessourceResponseType } from "./MediaViewer";

export type artStyleType =
  | "al_dente"
  | "athena"
  | "audrey"
  | "aurora"
  | "daguerre"
  | "eucalyptus"
  | "fes"
  | "frost"
  | "hairspray"
  | "hokusai"
  | "incognito"
  | "linen"
  | "peacock"
  | "primavera"
  | "quartz"
  | "red_rock"
  | "refresh"
  | "sizzle"
  | "sonnet"
  | "ukulele"
  | "zorro";

function MignatureItem({
  publicId,
  artEffect,
  isSelected = false,
  onClick,
}: {
  publicId: string;
  artEffect: artStyleType;
  isSelected: boolean;
  onClick: (artEffect: artStyleType) => void;
}) {
  return (
    <li>
      <button
        className={`w-full border ${
          isSelected ? "border-white" : "border-transparent"
        } rounded-md hover:border-white`}
        onClick={() => onClick(artEffect)}
      >
        <CldImage
          width={156}
          height={156}
          crop="fill"
          art={artEffect}
          src={publicId}
          alt={`Filter ${artEffect || "not selected"}`}
        />
        <span className="sr-only">{artEffect}</span>
      </button>
    </li>
  );
}

export default function MinatureListArtEffect({
  ressource,
  handleFilterChange,
}: {
  ressource: RessourceResponseType;
  handleFilterChange: (filter: string) => void;
}) {
  const listOfArtEffect: artStyleType[] = [
    "al_dente",
    "athena",
    "audrey",
    "aurora",
    "daguerre",
    "eucalyptus",
    "fes",
    "frost",
    "hairspray",
    "hokusai",
    "incognito",
    "linen",
    "peacock",
    "primavera",
    "quartz",
    "red_rock",
    "refresh",
    "sizzle",
    "sonnet",
    "ukulele",
    "zorro",
  ];
  const [selectedArtEffect, setSelectedArtEffect] = useState<
    artStyleType | undefined
  >();
  return (
    <>
      {listOfArtEffect.map((artEffect) => {
        return (
          <MignatureItem
            key={artEffect}
            publicId={ressource.public_id}
            artEffect={artEffect}
            isSelected={selectedArtEffect === artEffect}
            onClick={(artEffect) => {
              handleFilterChange(artEffect);
              setSelectedArtEffect(artEffect);
            }}
          />
        );
      })}
    </>
  );
}
