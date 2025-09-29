// @ts-expect-error-next-line
import { css, v } from "./boomer.js" with { type: "macro" };

export const bodyClassName = css(
  {
    base: {},
  },
  {
    name: "body",
  }
);
