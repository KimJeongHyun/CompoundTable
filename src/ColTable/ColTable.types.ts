import { ReactElement } from "react";

export interface AbstractItemType {
  id: number;
  [props: string]: any;
}

export interface ColTableProps<T> {
  data: T[];
  width?: number | string;
  height?: number | string;
  isHeadSticky?: boolean;
  children: Table2ChildrenType | Table2ChildrenType[];
}

export type Table2ChildrenType = ReactElement & {
  type: {
    name: any;
  };
};
