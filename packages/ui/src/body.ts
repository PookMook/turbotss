import { css, v } from "./boomer.js" with { type: "macro" };

export const bodyClassName = css(
  {
    base: {
      color: "red",
    },
  },
  {
    name: "body",
  }
);
