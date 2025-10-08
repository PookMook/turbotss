import React from "react";
import { css } from "../../boomer.js" with { type: "macro" };

export type IconProps = {
  svg: React.ReactElement | React.ComponentType | null;
  size?: number | string;
  color?:
    | "neutral"
    | "neutral-faded"
    | "positive"
    | "critical"
    | "warning"
    | "primary"
    | "disabled";
  autoWidth?: boolean;
  className?: string;
  attributes?: React.ComponentProps<"span">;
};

const iconClass = css(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 0,
      color: "inherit",
      "& svg": {
        display: "block",
        height: "1em",
        width: "1em",
      },
      "&.__auto & svg": {
        width: "auto",
      },
    },
    variants: {
      color: {
        neutral: { color: "inherit" },
        "neutral-faded": { color: "inherit" },
        positive: { color: "inherit" },
        critical: { color: "inherit" },
        warning: { color: "inherit" },
        primary: { color: "inherit" },
        disabled: { opacity: 0.4 },
      },
      auto: {
        true: {},
        false: {},
      },
    },
  },
  { name: "icon" }
);

const Icon: React.FC<IconProps> = (props) => {
  const {
    svg: Component,
    className,
    color,
    size = "1em",
    autoWidth,
    attributes,
  } = props;
  const classNames = [
    iconClass({ color: color as any, auto: autoWidth ? true : false }),
    className,
    autoWidth ? "__auto" : undefined,
  ]
    .filter(Boolean)
    .join(" ");
  const icon =
    React.isValidElement(Component) || Component === null ? (
      Component
    ) : (
      <Component />
    );
  const style = { ...attributes?.style, height: size };
  return (
    <span
      {...attributes}
      aria-hidden="true"
      className={classNames}
      style={style}
    >
      {icon && React.cloneElement(icon as any, { focusable: false })}
    </span>
  );
};

Icon.displayName = "Icon";

export { Icon };
