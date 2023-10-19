import React, { ReactNode, useState } from "react";
import { SC } from "./ColTable.styled";

import CompoundTableContext, {
  useCompoundTableContext,
} from "./ColTableContext";
import {
  AbstractItemType,
  Table2ChildrenType,
  ColTableProps,
} from "./ColTable.types";
import { convertTableSizeByType } from "./utils";

export const TableForm = <T,>({
  data,
  width,
  height,
  children,
  isHeadSticky,
}: ColTableProps<T>) => {
  const [isFold, setIsFold] = useState(false);

  const toggleFold = () => setIsFold((prev) => !prev);

  const convertedSize = convertTableSizeByType({
    width,
    height,
    data,
    isFold,
  });

  const isWidthCompatible = checkChildrenWidth({ children });

  const childrenLabelWidth = getChildrenLabelWidth({ children });

  const providerValue = {
    isFold,
    toggleFold,
    data,
    isWidthCompatible,
    isHeadSticky,
    childrenLabelWidth,
  };

  return (
    <CompoundTableContext.Provider value={providerValue}>
      <SC.TableContainer {...convertedSize} isFold={isFold}>
        {isHeadSticky && <TableStickyRow />}
        <SC.ColTable>{children}</SC.ColTable>
      </SC.TableContainer>
    </CompoundTableContext.Provider>
  );
};

export const ColTableCols = <T extends AbstractItemType>({
  dataKey,
  label,
  children,
  width,
}: {
  dataKey: keyof T;
  label: string;
  children?: (data: T[]) => ReactNode;
  width?: number;
}) => {
  const { toggleFold, data, isWidthCompatible, isHeadSticky } =
    useCompoundTableContext();

  const typedData = data as T[];

  if (typeof children !== "function" && !!children) {
    console.error("TableCols children must be set Function");
  }

  return (
    <SC.ColTableContainer width={isWidthCompatible ? width : undefined}>
      {!isHeadSticky && (
        <SC.ColTableCell isHead onClick={toggleFold}>
          {label}
        </SC.ColTableCell>
      )}
      {typedData.map((i) => (
        <SC.ColTableCell key={i.id}>
          {typeof children === "function" ? children(i[dataKey]) : i[dataKey]}
        </SC.ColTableCell>
      ))}
    </SC.ColTableContainer>
  );
};

const TableStickyRow = () => {
  const { isHeadSticky, childrenLabelWidth, toggleFold } =
    useCompoundTableContext();

  return (
    <>
      {isHeadSticky && (
        <SC.ColTableStickyRow onClick={toggleFold}>
          {childrenLabelWidth.map((i) => (
            <SC.ColTableStickyCell key={i.label} width={i.width}>
              {i.label}
            </SC.ColTableStickyCell>
          ))}
        </SC.ColTableStickyRow>
      )}
    </>
  );
};

const checkChildrenWidth = ({
  children,
}: {
  children: Table2ChildrenType | Table2ChildrenType[];
}) => {
  if (!Array.isArray(children)) return true;

  const totalWidth = children.reduce(
    (acc, cur) => acc + (cur.props.width ?? 0),
    0
  );

  const widthPropertyLength = children.filter((i) => i.props.width).length;

  if (
    totalWidth < 0 ||
    totalWidth > 100 ||
    (children.length > widthPropertyLength && totalWidth === 100)
  ) {
    console.error("TableCols width must be 100 in total");
    return false;
  }

  return true;
};

const getChildrenLabelWidth = ({
  children,
}: {
  children: Table2ChildrenType | Table2ChildrenType[];
}) => {
  if (!Array.isArray(children))
    return [
      {
        label: children.props.label as string,
        width: children.props.width as number,
      },
    ];

  return children.map((i) => ({
    label: i.props.label as string,
    width: i.props.width as number,
  }));
};
