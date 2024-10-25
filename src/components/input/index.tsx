import { InputContainer, SearchIcon, StyledInput } from "./styles";

interface InputProps {
  value: string;
  onChange: (e: any) => void;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Input = ({
  addonAfter,
  addonBefore,
  disabled,
  onChange,
  placeholder,
  style,
  value,
}: InputProps) => {
  return (
    <InputContainer>
      {addonBefore && <SearchIcon>{addonBefore}</SearchIcon>}
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={style}
      />
      {addonAfter && <SearchIcon>{addonAfter}</SearchIcon>}
    </InputContainer>
  );
};
