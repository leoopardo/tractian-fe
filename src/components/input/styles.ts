import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d1d1;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  height: 35px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;

  ::placeholder {
    color: #b0b0b0;
  }
`;

export const SearchIcon = styled.span`
  margin-left: 8px;
  color: #666;
  cursor: pointer;
`;
