import { AbstractItemType } from "./Table.types";

export const convertTableSizeByType = ({
  width,
  height,
  data,
  isFold,
}: {
  width?: number | string;
  height?: number | string;
  data: any[];
  isFold: boolean;
}) => {
  return {
    width: width
      ? typeof width === "string"
        ? width
        : typeof width === "number"
        ? width + "px"
        : "600px"
      : "auto",

    height: isFold
      ? "auto"
      : height
      ? typeof height === "string"
        ? height
        : typeof height === "number"
        ? height + "px"
        : "600px"
      : `${49 + 33 * data.length}px`,
  };
};

export const makeUpSortedData = <T extends AbstractItemType>({
  data,
  sort,
}: {
  data: T[];
  sort?: {
    value: string;
    order: "ASC" | "DESC";
  };
}) => {
  if (!sort) return data;

  const { value, order } = sort;

  return data.sort((a, b) =>
    a[value] < b[value] ? (order === "ASC" ? -1 : 1) : order === "ASC" ? 1 : -1
  );
};
