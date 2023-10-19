import { AbstractItemType } from "./Table2.types";

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
