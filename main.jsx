import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { BingoCardClip } from "./composition.jsx";
const exampleMatch = {
  // A single card layout for the clip. Use numbers or strings. Center will be ignored and shown as "FREE".
  card: [
    ["1", "18", "31", "48", "63"],
    ["2", "16", "30", "52", "66"],
    ["5", "20", "FREE", "57", "72"],
    ["12", "21", "39", "51", "68"],
    ["7", "24", "34", "46", "70"]
  ],
  // optional visual flags
  highlights: {
    // boolean matrix matching the card to highlight specific called numbers
    // use same shape as card, e.g. true for called number
  }
};
createRoot(document.getElementById("app")).render(
  /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: BingoCardClip,
      durationInFrames: 150,
      fps: 30,
      compositionWidth: 1080,
      compositionHeight: 1920,
      loop: true,
      controls: true,
      inputProps: { match: exampleMatch },
      autoplay: true,
      style: { maxWidth: "100%", maxHeight: "100%" }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 5
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 24,
    columnNumber: 3
  })
);
