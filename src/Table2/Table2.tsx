import React, { ReactNode, useState } from "react";
import { SC } from "./Table2.styled";

import CompoundTableContext, { useCompoundTableContext } from "./TableContext2";
import {
  AbstractItemType,
  Table2ChildrenType,
  Table2Props,
} from "./Table2.types";
import { convertTableSizeByType } from "./utils";

export const TableForm = <T,>({
  data,
  width,
  height,
  children,
  isHeadSticky,
}: Table2Props<T>) => {
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
        <SC.Table2>{children}</SC.Table2>
      </SC.TableContainer>
    </CompoundTableContext.Provider>
  );
};

export const Table2Cols = <T extends AbstractItemType>({
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
    <SC.TableColContainer width={isWidthCompatible ? width : undefined}>
      {!isHeadSticky && (
        <SC.TableColCell isHead onClick={toggleFold}>
          {label}
        </SC.TableColCell>
      )}
      {typedData.map((i) => (
        <SC.TableColCell key={i.id}>
          {typeof children === "function" ? children(i[dataKey]) : i[dataKey]}
        </SC.TableColCell>
      ))}
    </SC.TableColContainer>
  );
};

const TableStickyRow = () => {
  const { isHeadSticky, childrenLabelWidth, toggleFold } =
    useCompoundTableContext();

  return (
    <>
      {isHeadSticky && (
        <SC.TableStickyRow onClick={toggleFold}>
          {childrenLabelWidth.map((i) => (
            <SC.TableStickyCell key={i.label} width={i.width}>
              {i.label}
            </SC.TableStickyCell>
          ))}
        </SC.TableStickyRow>
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
