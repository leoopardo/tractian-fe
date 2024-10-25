import styled from "styled-components";

interface TypographyProps {
  size: "small" | "medium" | "large";
  bold?: boolean;
  color?: string;
}

const head = styled.h1<TypographyProps>(({ size, theme, bold, color }) => ({
  fontSize: size === "small" ? "16px" : size === "medium" ? "24px" : "32px",
  fontWeight: bold ? "bold" : "normal",
  color: color || theme.colors.dark,
  margin: "0",
  padding: "0",
}));

const content = styled.p<TypographyProps>(({ size, theme, bold, color }) => ({
  fontSize: size === "small" ? "16px" : size === "medium" ? "24px" : "32px",
  fontWeight: bold ? "bold" : "normal",
  color: color || theme.colors.dark,
  margin: "0",
  padding: "0",
}));

export const TypographyStyles = {
  head,
  content,
};
