import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate
} from "remotion";
const COLORS = {
  bg: "#fffef8",
  gridStroke: "#2b2b2b",
  headerText: "#1b1b1b",
  numberText: "#111",
  freeBg: "#efefef",
  highlight: "#ffd54f",
  circleFill: "#ff6b6b"
};
const Header = () => {
  const letters = ["B", "I", "N", "G", "O"];
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
        width: 492,
        boxSizing: "content-box"
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
            border: `3px solid ${COLORS.gridStroke}`,
            fontSize: 48,
            fontWeight: 800,
            color: COLORS.headerText,
            fontFamily: "Arial, Helvetica, sans-serif"
          },
          children: L
        },
        L,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 41,
          columnNumber: 9
        }
      ))
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 5
    }
  );
};
const Cell = ({ value, highlighted, circleProgress }) => {
  const isFree = typeof value === "string" && value.toLowerCase().includes("free");
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        width: 92,
        height: 92,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${COLORS.gridStroke}`,
        background: isFree ? COLORS.freeBg : "#fff",
        fontSize: 28,
        fontWeight: 700,
        color: COLORS.numberText,
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
        overflow: "hidden"
      },
      children: [
        typeof circleProgress === "number" && circleProgress > 0 && /* @__PURE__ */ jsxDEV(
          "div",
          {
            style: {
              position: "absolute",
              width: 74,
              height: 74,
              borderRadius: 999,
              background: COLORS.circleFill,
              opacity: 0.95,
              transform: `scale(${circleProgress})`,
              transition: "none",
              zIndex: 0
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 91,
            columnNumber: 9
          }
        ),
        highlighted && !isFree && /* @__PURE__ */ jsxDEV(
          "div",
          {
            style: {
              position: "absolute",
              inset: 6,
              borderRadius: 8,
              background: COLORS.highlight,
              opacity: 0.9,
              zIndex: 0
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 107,
            columnNumber: 9
          }
        ),
        /* @__PURE__ */ jsxDEV("div", { style: { zIndex: 1 }, children: isFree ? "FREE" : value }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 118,
          columnNumber: 7
        })
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 72,
      columnNumber: 5
    }
  );
};
const BingoCardClip = ({ match = {} }) => {
  const frame = useCurrentFrame();
  const card = match.card && match.card.length === 5 ? match.card : defaultCard();
  const highlights = match.highlights || [];
  const replayActions = Array.isArray(match.replayActions) ? match.replayActions : [];
  const cellProgress = {};
  replayActions.forEach((a) => {
    const key = `${a.r}-${a.c}`;
    const start = a.frame;
    const end = a.frame + 14;
    const p = interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    });
    cellProgress[key] = p;
  });
  const scale = interpolate(frame, [0, 12, 30], [0.86, 1.03, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { background: COLORS.bg, justifyContent: "center", alignItems: "center" }, children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        width: 620,
        padding: 28,
        borderRadius: 20,
        background: "#ffffff",
        boxShadow: "0 18px 50px rgba(0,0,0,0.12)",
        transform: `scale(${scale})`,
        opacity
      },
      children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 173,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 92px)", gap: 8 }, children: card.map(
          (row, rIdx) => row.map((cell, cIdx) => {
            const highlighted = Array.isArray(highlights) && highlights[rIdx] && highlights[rIdx][cIdx];
            const progress = cellProgress[`${rIdx}-${cIdx}`] ?? 0;
            return /* @__PURE__ */ jsxDEV(
              Cell,
              {
                value: cell,
                highlighted,
                circleProgress: progress
              },
              `${rIdx}-${cIdx}`,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 185,
                columnNumber: 19
              }
            );
          })
        ) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 174,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 18, color: "#666", fontSize: 14 }, children: "Bingo card" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 197,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 172,
        columnNumber: 9
      })
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 161,
      columnNumber: 7
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 160,
    columnNumber: 5
  });
};
function defaultCard() {
  return [
    ["3", "18", "31", "47", "61"],
    ["9", "16", "29", "52", "66"],
    ["2", "20", "FREE", "57", "71"],
    ["12", "24", "39", "50", "69"],
    ["7", "23", "33", "48", "75"]
  ];
}
export {
  BingoCardClip
};
