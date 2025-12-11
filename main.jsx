import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { BingoCardClip } from "./composition.jsx";
const exampleCard = [
  ["1", "18", "31", "48", "63"],
  ["2", "16", "30", "52", "66"],
  ["5", "20", "FREE", "57", "72"],
  ["12", "21", "39", "51", "68"],
  ["7", "24", "34", "46", "70"]
];
function HeaderSmall() {
  const letters = ["B", "I", "N", "G", "O"];
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        display: "flex",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12
      },
      children: letters.map((L) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          style: {
            width: 92,
            height: 92,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
            border: `3px solid #2b2b2b`,
            fontSize: 48,
            fontWeight: 800,
            color: "#1b1b1b",
            fontFamily: "Arial, Helvetica, sans-serif"
          },
          children: L
        },
        L,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
function InteractiveApp() {
  const [actions, setActions] = useState([]);
  const [playerKey, setPlayerKey] = useState(0);
  const [isReplayMode, setIsReplayMode] = useState(false);
  const handleCellTap = (r, c) => {
    const t = Date.now();
    const next = [...actions, { r, c, t }];
    setActions(next);
  };
  const clearActions = () => {
    setActions([]);
    setIsReplayMode(false);
    setPlayerKey((k) => k + 1);
  };
  const matchForPlayer = useMemo(() => {
    if (!isReplayMode) return { card: exampleCard, highlights: [] };
    if (actions.length === 0) return { card: exampleCard, highlights: [] };
    const sorted = [...actions].sort((a, b) => a.t - b.t);
    const t0 = sorted[0].t;
    const actionsWithFrame = sorted.map((a, idx) => {
      const msOffset = a.t - t0;
      const frame = Math.round(msOffset / 1e3 * 30) + idx * 6;
      return { r: a.r, c: a.c, frame };
    });
    return { card: exampleCard, replayActions: actionsWithFrame };
  }, [isReplayMode, actions]);
  return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", height: "100%", gap: 12 }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { width: 640, padding: 20, boxSizing: "border-box", background: "#fff", borderRadius: 16 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 800, marginBottom: 8, fontSize: 18 }, children: "Tap to mark" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(HeaderSmall, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 92px)", gap: 8, justifyContent: "center" }, children: exampleCard.map(
        (row, rIdx) => row.map((cell, cIdx) => {
          const isFree = typeof cell === "string" && cell.toLowerCase().includes("free");
          const tapped = actions.some((a) => a.r === rIdx && a.c === cIdx);
          return /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => handleCellTap(rIdx, cIdx),
              style: {
                width: 92,
                height: 92,
                borderRadius: 12,
                border: "2px solid #2b2b2b",
                background: isFree ? "#efefef" : "#fff",
                fontWeight: 700,
                fontSize: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                color: "#111",
                fontFamily: "Arial, Helvetica, sans-serif"
              },
              children: [
                tapped && /* @__PURE__ */ jsxDEV("div", { style: {
                  position: "absolute",
                  width: 74,
                  height: 74,
                  borderRadius: 999,
                  background: "#ff6b6b",
                  opacity: 0.95,
                  zIndex: 0
                } }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 126,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { zIndex: 1 }, children: isFree ? "FREE" : cell }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 137,
                  columnNumber: 19
                }, this)
              ]
            },
            `${rIdx}-${cIdx}`,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 103,
              columnNumber: 17
            },
            this
          );
        })
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 12, display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              setIsReplayMode(true);
              setPlayerKey((k) => k + 1);
            },
            style: { padding: "8px 12px", borderRadius: 8, background: "#1b9fff", color: "#fff", border: "none" },
            children: "Render Replay"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 147,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: clearActions,
            style: { padding: "8px 12px", borderRadius: 8, background: "#eee", border: "none" },
            children: "Clear"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 153,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 12, fontSize: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700 }, children: "Recorded actions JSON" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("pre", { style: { whiteSpace: "pre-wrap", wordBreak: "break-word", background: "#f7f7f7", padding: 8, borderRadius: 6 }, children: JSON.stringify(actions, null, 2) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%", maxWidth: 420 }, children: /* @__PURE__ */ jsxDEV(
      Player,
      {
        component: BingoCardClip,
        durationInFrames: 150,
        fps: 30,
        compositionWidth: 1080,
        compositionHeight: 1920,
        loop: true,
        controls: true,
        inputProps: { match: matchForPlayer },
        autoplay: true,
        style: { width: "100%", height: "100%" }
      },
      playerKey + (isReplayMode ? "-replay" : ""),
      false,
      {
        fileName: "<stdin>",
        lineNumber: 171,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 170,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsxDEV(InteractiveApp, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 190,
  columnNumber: 51
}));
