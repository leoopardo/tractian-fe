import styled from "styled-components";

export const LayoutContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#e4ebf0",
}));

export const LayoutHeader = styled.header(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  height: "48px",
  borderBottom: `1px solid ${theme.colors.grey}`,
  backgroundColor: theme.colors.dark,
  padding: "0 16px",
}));

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const LayoutBody = styled.body(() => ({
  display: "flex",
  backgroundColor: "#e4ebf0",
  minHeight: "calc(100% - 90px)",
  padding: "12px",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
}));
