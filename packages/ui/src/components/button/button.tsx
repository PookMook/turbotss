import React, { forwardRef } from "react";
import { Icon } from "../icon/icon.js";
import { Loader } from "../loader/loader.js";
import { Actionable, type ActionableRef } from "../actionable/actionable.js";
import { css, v } from "../../boomer.js" with { type: "macro" };

export type ButtonSize = "xlarge" | "large" | "medium" | "small";
export type ButtonVariant = "solid" | "outline" | "ghost" | "faded";
export type ButtonColor =
  | "primary"
  | "critical"
  | "positive"
  | "neutral"
  | "media"
  | "inherit";

export type ButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  elevated?: boolean;
  highlighted?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  loadingAriaLabel?: string;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  size?: ButtonSize;
  children?: React.ReactNode;
  rounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  icon?: React.ComponentType | React.ReactElement | null;
  endIcon?: React.ComponentType | React.ReactElement | null;
  stopPropagation?: boolean;
  as?: any;
  render?: (attributes: Record<string, unknown>) => React.ReactNode;
  className?: string;
  attributes?: Record<string, unknown>;
};

const buttonClass = css(
  {
    base: {
      transition: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
      transitionProperty:
        "background-color, box-shadow, border-color, color, transform",
      padding:
        "calc(4px - var(--rs-button-border-width)) calc(var(--rs-p-h) - var(--rs-button-border-width))",
      borderRadius: "var(--rs-button-radius)",
      cursor: "pointer",
      position: "relative",
      zIndex: 0,
      boxSizing: "border-box",
      textAlign: "initial",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      overflow: "hidden",
      border:
        "var(--rs-button-border-width) solid var(--rs-button-border-color)",
      WebkitTapHighlightColor: "transparent",
      fontFamily: "inherit",
      fontWeight: 500,
      fontSize: "var(--rs-button-font-size)",
      lineHeight: "var(--rs-button-line-height)",
      letterSpacing: "var(--rs-button-letter-spacing)",
      minHeight: "calc(var(--rs-button-line-height) + var(--rs-p-v) * 2)",
      minWidth:
        "calc(var(--rs-button-line-height) - (8px) + (var(--rs-button-p-h) * 2))",
      backgroundColor: "var(--rs-button-background-color)",
      color: "var(--rs-button-foreground-color)",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        transition: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "opacity",
        opacity: "var(--rs-button-highlight-opacity-base)",
        background:
          "var(--rs-button-highlight-color, var(--rs-button-foreground-color))",
        transform: "translateZ(0)",
      },
      query: {
        "@media (hover: hover) and (pointer: fine)": {
          "&:hover:not(.--loading, .--highlighted, .--disabled, :active)::before":
            {
              opacity: "var(--rs-button-highlight-opacity)",
            },
        },
      },
      "&.--highlighted::before, &:active:not(.--loading, .--disabled)::before":
        {
          opacity:
            "calc(var(--rs-button-highlight-opacity) + max(0.04, var(--rs-button-highlight-opacity) / 2))",
        },
      "& .text, & .icon": { position: "relative", zIndex: 5 },
      "& .text": {
        display: "flex",
        alignItems: "center",
        gap: "var(--rs-button-gap)",
      },
      "& .icon": { marginInlineEnd: "var(--rs-button-gap)" },
      "& .icon.__end": {
        marginInlineEnd: 0,
        marginInlineStart: "var(--rs-button-gap)",
      },
      "& .loader": {
        position: "absolute",
        inset: 0,
        display: "none",
        alignItems: "center",
        justifyContent: "center",
      },
      "&.--icon-only .icon": { margin: "0 -4px" },
      "&.--loading": {
        cursor: "default",
      },
    },
    variants: {
      size: {
        small: {
          "--rs-button-p-v": "4px",
          "--rs-button-p-h": "8px",
          "--rs-button-gap": "4px",
          "--rs-button-line-height": "1.25rem",
          "--rs-button-font-size": "0.875rem",
          "--rs-button-letter-spacing": "normal",
          "--rs-button-radius": v("radii.buttonSmall"),
        },
        medium: {
          "--rs-button-p-v": "8px",
          "--rs-button-p-h": "12px",
          "--rs-button-gap": "8px",
          "--rs-button-line-height": "1.25rem",
          "--rs-button-font-size": "0.875rem",
          "--rs-button-letter-spacing": "normal",
          "--rs-button-radius": v("radii.buttonMedium"),
        },
        large: {
          "--rs-button-p-v": "12px",
          "--rs-button-p-h": "16px",
          "--rs-button-gap": "8px",
          "--rs-button-line-height": "1.5rem",
          "--rs-button-font-size": "1rem",
          "--rs-button-letter-spacing": "normal",
          "--rs-button-radius": v("radii.buttonLarge"),
        },
        xlarge: {
          "--rs-button-p-v": "16px",
          "--rs-button-p-h": "20px",
          "--rs-button-gap": "12px",
          "--rs-button-line-height": "1.5rem",
          "--rs-button-font-size": "1rem",
          "--rs-button-letter-spacing": "normal",
          "--rs-button-radius": v("radii.buttonXlarge"),
        },
      },
      fullWidth: {
        true: { width: "100%", textAlign: "center" },
        false: { width: "auto", textAlign: "initial" },
      },
      rounded: {
        true: { borderRadius: "9999px" },
        false: {},
      },
      variant: {
        solid: {},
        outline: { "--rs-button-border-width": "1px" },
        ghost: {},
        faded: {},
      },
      color: {
        neutral: {},
        primary: {},
        critical: {},
        positive: {},
        media: {},
        inherit: {},
      },
      elevated: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
      highlighted: {
        true: {},
        false: {},
      },
      iconOnly: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      {
        variants: { variant: "solid", color: ["neutral"] },
        styles: {
          "--rs-button-highlight-opacity": 0.04,
          "--rs-button-background-color": "var(--rs-color-background-neutral)",
          "--rs-button-foreground-color":
            "var(--rs-color-on-background-neutral)",
        } as any,
      },
      {
        variants: {
          variant: "solid",
          color: ["primary", "critical", "positive"],
        },
        styles: {
          "--rs-button-highlight-opacity": 0.08,
          "--rs-button-background-color": "var(--rs-color-background-primary)",
          "--rs-button-foreground-color":
            "var(--rs-color-on-background-primary)",
        } as any,
      },
      {
        variants: { variant: "solid", color: ["media"] },
        styles: {
          "--rs-button-highlight-opacity": 0.06,
          "--rs-button-background-color": "var(--rs-color-white)",
          "--rs-button-foreground-color": "var(--rs-color-black)",
        } as any,
      },
      {
        variants: {
          variant: "faded",
          color: ["neutral", "primary", "critical", "positive"],
        },
        styles: {
          "--rs-button-highlight-opacity": 0.04,
          "--rs-button-background-color":
            "var(--rs-color-background-neutral-faded)",
          "--rs-button-foreground-color": "var(--rs-color-foreground-neutral)",
        } as any,
      },
      {
        variants: { variant: "faded", color: ["media"] },
        styles: {
          "--rs-button-highlight-opacity-base": 0.24,
          "--rs-button-highlight-opacity": 0.32,
          "--rs-button-foreground-color": "var(--rs-color-white)",
          "--rs-button-highlight-color": "var(--rs-color-black)",
        } as any,
      },
      {
        variants: { variant: "faded", color: ["inherit"] },
        styles: {
          "--rs-button-highlight-opacity-base": 0.12,
          "--rs-button-highlight-opacity": 0.16,
          "--rs-button-foreground-color": "inherit",
          "--rs-button-highlight-color": "currentcolor",
        } as any,
      },
      {
        variants: {
          variant: "outline",
          color: ["primary", "critical", "positive"],
        },
        styles: {
          "--rs-button-highlight-opacity": 0.06,
          "--rs-button-foreground-color": "var(--rs-color-foreground-primary)",
          "--rs-button-border-color": "var(--rs-color-border-primary-faded)",
          "--rs-button-highlight-color": "var(--rs-color-background-primary)",
        } as any,
      },
      {
        variants: { variant: "outline", color: ["neutral"] },
        styles: {
          "--rs-button-highlight-opacity": 0.24,
          "--rs-button-foreground-color": "var(--rs-color-foreground-neutral)",
          "--rs-button-border-color": "var(--rs-color-border-neutral)",
          "--rs-button-highlight-color": "var(--rs-color-background-neutral)",
        } as any,
      },
      {
        variants: { variant: "outline", color: ["inherit"] },
        styles: {
          "--rs-button-border-width": "0px",
          "--rs-button-foreground-color": "inherit",
          "--rs-button-highlight-color": "currentcolor",
        } as any,
      },
      {
        variants: { variant: "ghost", color: ["neutral"] },
        styles: { "--rs-button-highlight-opacity": 0.32 } as any,
      },
      {
        variants: {
          variant: "ghost",
          color: ["neutral", "primary", "critical", "positive"],
        },
        styles: {
          "--rs-button-highlight-opacity": 0.12,
          "--rs-button-foreground-color": "var(--rs-color-foreground-primary)",
          "--rs-button-highlight-color": "var(--rs-color-background-primary)",
        } as any,
      },
      {
        variants: {
          elevated: "true",
          variant: "outline",
          color: ["neutral", "primary", "critical", "positive"],
        },
        styles: {
          background: "var(--rs-color-background-elevation-raised)",
        } as any,
      },
    ],
  },
  { name: "button" }
);

const Button = forwardRef<ActionableRef, ButtonProps>((props, ref) => {
  const {
    variant = "solid",
    color = "neutral",
    elevated,
    highlighted,
    fullWidth,
    loading,
    loadingAriaLabel,
    disabled,
    type,
    href,
    size = "medium",
    children,
    rounded,
    onClick,
    icon,
    endIcon,
    stopPropagation,
    as,
    render,
    className,
    attributes,
  } = props;

  const iconOnly = (icon || endIcon) && !children;
  const rootClassName = [
    buttonClass({
      size,
      fullWidth: fullWidth ? true : false,
      rounded: rounded ? true : false,
      variant,
      color,
      elevated: elevated ? true : false,
      disabled: disabled ? true : false,
      highlighted: highlighted ? true : false,
      iconOnly: iconOnly ? true : false,
    }),
    className,
    loading ? "--loading" : undefined,
    disabled ? "--disabled" : undefined,
    highlighted ? "--highlighted" : undefined,
    iconOnly ? "--icon-only" : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  const renderIcon = (position: "start" | "end") => {
    const isStartValid = position === "start" && icon;
    const isEndValid = position === "end" && endIcon;
    const isInvalid = !(isStartValid || isEndValid);
    if (isInvalid) return null;
    const iconSize = (() => {
      if (size === "large") return 5;
      if (size === "xlarge") return 6;
      return 4;
    })();
    return (
      <Icon
        className={["icon", position === "end" ? "__end" : undefined]
          .filter(Boolean)
          .join(" ")}
        svg={(position === "start" ? icon : endIcon)! as any}
        size={iconSize}
        autoWidth
      />
    );
  };

  return (
    <Actionable
      disabled={disabled || loading}
      className={rootClassName}
      attributes={{
        ...attributes,
        "data-rs-aligner-target": true,
      }}
      type={type as any}
      onClick={onClick as any}
      href={href}
      ref={ref}
      as={as}
      stopPropagation={stopPropagation}
      render={render as any}
    >
      {loading && (
        <div className="loader">
          <Loader
            color="inherit"
            attributes={{ "aria-label": loadingAriaLabel }}
          />
        </div>
      )}
      {renderIcon("start")}
      {children && <span className="text">{children}</span>}
      {renderIcon("end")}
    </Actionable>
  );
}) as React.ForwardRefExoticComponent<ButtonProps & { ref?: ActionableRef }>;

Button.displayName = "Button";

export { Button };
