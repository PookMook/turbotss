import React from "react";
import { css, keyframes } from "../../boomer.js" with { type: "macro" };

export type LoaderSize = "xlarge" | "large" | "medium" | "small";
export type LoaderProps = {
  size?: LoaderSize;
  color?: "primary" | "critical" | "positive" | "neutral" | "inherit";
  ariaLabel?: string;
  className?: string;
  attributes?: React.ComponentProps<"span">;
};

const spin = keyframes(
  {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  "spin"
);

const loaderClass = css(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      lineHeight: 0,
      "& .inner": {
        display: "block",
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "currentColor",
        borderInlineStartColor: "transparent",
        animation: `${spin} 1s linear infinite`,
      },
    },
    variants: {
      size: {
        small: { "& .inner": { width: "16px", height: "16px" } },
        medium: { "& .inner": { width: "20px", height: "20px" } },
        large: { "& .inner": { width: "24px", height: "24px" } },
        xlarge: { "& .inner": { width: "28px", height: "28px" } },
      },
      color: {
        primary: { color: "currentColor" },
        critical: { color: "currentColor" },
        positive: { color: "currentColor" },
        neutral: { color: "currentColor" },
        inherit: { color: "inherit" },
      },
    },
  },
  { name: "loader" }
);

const Loader: React.FC<LoaderProps> = (props) => {
  const { size = "small", color = "primary", className, attributes } = props;
  const ariaLabel = props.ariaLabel || attributes?.["aria-label"];
  const classNames = [loaderClass({ size, color }), className]
    .filter(Boolean)
    .join(" ");
  return (
    <span
      {...attributes}
      role="progressbar"
      aria-live={ariaLabel ? "assertive" : undefined}
      aria-label={ariaLabel}
      className={classNames}
    >
      <span className="inner" />
    </span>
  );
};

Loader.displayName = "Loader";

export { Loader };
