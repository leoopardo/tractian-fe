import { ButtonStyle } from "./styles";

interface ButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  active?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  onClick,
  active,
  disabled,
  type,
  variant = "primary",
  style,
  children,
  icon,
  iconPosition = "left",
  size = "small",
}: ButtonProps) => {
  return (
    <ButtonStyle
      variant={variant}
      active={active}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={style}
      size={size}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </ButtonStyle>
  );
};
