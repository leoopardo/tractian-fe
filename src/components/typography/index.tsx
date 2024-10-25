import React from "react";
import { TypographyStyles } from "./styles";

interface TypographyProps {
  variant: "head" | "content";
  size?: "small" | "medium" | "large";
  bold?: boolean;
  color?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Typography = ({
  size = "small",
  bold,
  color,
  variant,
  children,
  style,
}: TypographyProps) => {
  const Component = TypographyStyles[variant];

  return (
    <Component size={size} bold={bold} color={color} style={style}>
      {children}
    </Component>
  );
};
