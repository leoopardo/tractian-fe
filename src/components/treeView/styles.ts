import styled from "styled-components";

export const LocationList = styled.li<{ open: boolean }>`
  display: flex;
  list-style: none;
  flex-direction: column;
  border-left: ${({ open }) => (!open ? "none" : "1px solid #d1d1d1")};
  gap: 8px;
`;

export const LocationListLabel = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;
  cursor: pointer;
  transition: all 0.5s;
  padding: 2px 0px;
  border-radius: 4;

  &:hover {
    background-color: #d1d1d1;
  }

  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.colors.secondary};
  `}
`;

export const LocationListSubItemLabel = styled.li<{ index: number }>`
  display: flex;
  list-style: none;
  gap: 8px;
  margin-left: ${({ index }) => index * 16}px;
`;
