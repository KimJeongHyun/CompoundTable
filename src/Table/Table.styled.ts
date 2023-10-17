import styled from "styled-components";

export const SC = {
  Table: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border: 1px solid #ccc;
    overflow: auto;
  `,
  TableRowContainer: styled.div<{ isFold: boolean }>`
    height: ${({ isFold }) => (isFold ? 0 : "auto")};
    overflow: ${({ isFold }) => (isFold ? "hidden" : "auto")};
    z-index: 0;
  `,
  TableRow: styled.div<{ isCol?: boolean }>`
    display: flex;
    font-weight: 700;
    background: ${({ isCol }) => (isCol ? "#e2e2e2" : "#fff")};
    height: ${({ isCol }) => (isCol ? 48 : 32)}px;
    border-bottom: 1px solid #ccc;

    ${({ isCol }) =>
      isCol
        ? `
      position:sticky;
      top:0;
      z-index:1
    `
        : ""}
  `,
  TableCell: styled.div<{
    align?: "start" | "end";
    width?: number;
    isWidthUnCompatible: boolean;
  }>`
    ${({ width, isWidthUnCompatible }) =>
      isWidthUnCompatible || !width
        ? `flex:1`
        : `flex-basis:${width}%; width:${width}%`};

    display: flex;
    justify-content: ${({ align }) => (align ? align : "center")};
    align-items: center;
    line-height: 100%;
    height: 100%;
    padding: 0 16px;
    overflow: hidden;
    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }
  `,
};
