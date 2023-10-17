import { ReactNode } from "react";

export interface AbstractItemType {
  id: number;
  [props: string]: any;
}

export interface TableAccessorType {
  label: string;
  value: string;
  align?: "start" | "end";
  width?: number;
}

export interface CustomCellItem<T> {
  [key: string]: (data: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  accessor: TableAccessorType[]; // 2차원 고려..
  customCellNode?: CustomCellItem<T>;
  width?: number | string;
  height?: number | string;
  //   rowHeight: number;
  //   isDrag?: boolean;
  onRowClick?: (args: T) => void;
  onColClick?: (args: TableAccessorType) => void;
  sort?: { value: string; order: "ASC" | "DESC" };
  isToggle?: boolean;
}
