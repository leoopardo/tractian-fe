import styled from "styled-components";

interface ButtonStyleProps {
  theme: any;
  variant: "primary" | "secondary";
  active?: boolean;
  disabled?: boolean;
  size: "small" | "medium" | "large";
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.tertiary : theme.colors.light};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.light : theme.colors.primary};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: none;
  outline: ${({ variant, theme }) =>
    variant === "primary" ? "none" : `${theme.colors.grey} 1px solid`};
  padding: 4px 8px;
  border-radius: 2px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  gap: 4px;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.secondary : null};
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return {
          height: "24px",
          fontSize: "12px",
        };
      case "medium":
        return {
          height: "32px",
          fontSize: "16px",
        };
      case "large":
        return {
          height: "48px",
          fontSize: "24px",
        };
    }
  }}

  ${({ theme, active }) =>
    active &&
    ` 
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.light};
      outline: none;
    `}
`;
