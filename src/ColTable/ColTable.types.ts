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
  children: ColTableChildrenType | ColTableChildrenType[];
}

export type ColTableChildrenType = ReactElement & {
  type: {
    name: any;
  };
};
