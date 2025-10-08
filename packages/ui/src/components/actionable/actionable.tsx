"use client";

import React, { forwardRef } from "react";
import { css } from "../../boomer.js" with { type: "macro" };

type AnyAttrs = Record<string, unknown>;

export type ActionableRef = HTMLElement;

export type ActionableProps = {
  children?: React.ReactNode;
  render?: (attributes: AnyAttrs) => React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  insetFocus?: boolean;
  disableFocusRing?: boolean;
  borderRadius?: "inherit" | "default";
  as?: any;
  stopPropagation?: boolean;
  fullWidth?: boolean;
  touchHitbox?: boolean;
  className?: string;
  attributes?: AnyAttrs;
};

const actionableClass = css(
  {
    base: {
      display: "inline-block",
      verticalAlign: "top",
      textDecoration: "none",
      color: "inherit",
      lineHeight: "inherit",
      fontSize: "inherit",
      fontWeight: "inherit",
      textAlign: "initial",
      padding: 0,
      border: 0,
      margin: 0,
      background: "none",
      position: "relative",
      isolation: "isolate",
      // WebKit highlight handled by user-agents; omit non-standard property in typings
      outline: "none",
      '&[role="button"]': {
        cursor: "pointer",
        userSelect: "none",
      },
      "&.--full-width": {
        width: "100%",
      },
      "&.--disabled, &[disabled]": {
        cursor: "not-allowed",
      },
    },
    variants: {
      inset: {
        true: {},
        false: {},
      },
      disabledFocusRing: {
        true: {},
        false: {},
      },
      radius: {
        inherit: {},
        default: {},
      },
      fullWidth: {
        true: {},
        false: {},
      },
    },
  },
  { name: "actionable" }
);

const touchHitboxClass = css(
  {
    base: {
      position: "absolute",
      inset: "50%",
      height: "100%",
      width: "100%",
      transform: "translate(-50%, -50%)",
      minWidth: "24px",
      minHeight: "24px",
      pointerEvents: "none",
    },
  },
  { name: "actionable-touch" }
);

const Actionable = forwardRef<ActionableRef, ActionableProps>((props, ref) => {
  const {
    children,
    render,
    href,
    onClick,
    type,
    disabled,
    insetFocus,
    disableFocusRing,
    borderRadius,
    as,
    stopPropagation,
    fullWidth,
    touchHitbox,
    className,
    attributes,
  } = props;

  const classNames = [
    actionableClass({
      inset: insetFocus ? true : false,
      disabledFocusRing: disableFocusRing ? true : false,
      radius: borderRadius === "inherit" ? "inherit" : "default",
      fullWidth: fullWidth ? true : false,
    }),
    className,
    fullWidth ? "--full-width" : undefined,
    disabled ? "--disabled" : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  const rootAttributes: any = { ...(attributes || {}) };
  const hasClickHandler = Boolean(onClick || (attributes as any)?.onClick);
  const hasFocusHandler = Boolean(
    (attributes as any)?.onFocus || (attributes as any)?.onBlur
  );
  const isLink = Boolean(href || (attributes as any)?.href);
  const isButton = Boolean(
    hasClickHandler || hasFocusHandler || type || (attributes as any)?.ref
  );
  const renderedAsButton = !isLink && isButton && (!as || as === "button");

  let TagName: any;
  if (isLink) {
    TagName = "a";
    rootAttributes.href = disabled
      ? undefined
      : href || (attributes as any)?.href;
  } else if (renderedAsButton) {
    TagName = "button";
    rootAttributes.type = type || (attributes as any)?.type || "button";
    rootAttributes.disabled = disabled || (attributes as any)?.disabled;
  } else if (isButton) {
    const isFocusable = as === "label";
    const simulateButton = !isFocusable || hasClickHandler || hasFocusHandler;
    TagName = as || "span";
    rootAttributes.role = simulateButton ? "button" : undefined;
    rootAttributes.tabIndex = simulateButton ? 0 : undefined;
  } else {
    TagName = as || "span";
  }

  const handlePress = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    if (stopPropagation) event.stopPropagation();
    onClick?.(event);
    (attributes as any)?.onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const isSpace = event.key === " ";
    const isEnter = event.key === "Enter";
    if (!isSpace && !isEnter) return;
    if (rootAttributes.role !== "button") return;
    if (stopPropagation) event.stopPropagation();
    event.preventDefault();
    handlePress(event as unknown as React.MouseEvent<HTMLElement>);
  };

  const childrenNode = (
    <>
      {touchHitbox && (isLink || isButton) && !disabled && (
        <span className={touchHitboxClass()} />
      )}
      {children}
    </>
  );

  const tagAttributes = {
    ref: ref as any,
    ...rootAttributes,
    className: classNames,
    onClick: handlePress,
    onKeyDown: handleKeyDown,
    "aria-disabled": disabled ? true : undefined,
    children: childrenNode,
  } as const;

  if (render) return render(tagAttributes as any);
  return <TagName {...(tagAttributes as any)} />;
});

Actionable.displayName = "Actionable";

export { Actionable };
