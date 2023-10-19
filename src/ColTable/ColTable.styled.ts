import styled from "styled-components";

export const SC = {
  TableContainer: styled.div<{
    width: string;
    height: string;
    isFold: boolean;
  }>`
    width: ${({ width }) => width};
    height: ${({ isFold, height }) => (isFold ? "49px" : height)};
    border: 1px solid #ccc;
    overflow: ${({ isFold }) => (isFold ? "hidden" : "auto")};
  `,
  ColTable: styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
  `,
  ColTableContainer: styled.div<{ width?: number }>`
    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }

    ${({ width }) => (width ? `flex-basis:${width}%` : `flex:1`)};
    height: fit-content;

    overflow: hidden;
  `,
  ColTableCell: styled.div<{ isHead?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ isHead }) => (isHead ? 700 : 500)};
    height: ${({ isHead }) => (isHead ? 48 : 32)}px;
    background: ${({ isHead }) => (isHead ? "#e2e2e2" : "Efff")};
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    overflow: hidden;
  `,

  ColTableStickyRow: styled.div`
    height: 48px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1;
  `,
  ColTableStickyCell: styled.div<{ width?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    background: #e2e2e2;
    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }

    ${({ width }) => (width ? `flex-basis:${width}%` : `flex:1`)};
    white-space: nowrap;
    overflow: hidden;
  `,
};
