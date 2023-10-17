import React, { useState } from "react";

import CompoundTableContext from "./TableContext";
import { SC } from "./Table.styled";
import { TableCols, TableRows } from "./components/";

import { TableProps, AbstractItemType } from "./Table.types";
import { convertTableSizeByType, makeUpSortedData } from "./utils";

export default function Table<T extends AbstractItemType>({
  data = [],
  accessor = [],
  customCellNode,
  width,
  height,
  //   rowHeight = 48,
  //   isDrag = false,
  onRowClick,
  onColClick,
  isToggle = true,
  sort,
}: TableProps<T>) {
  const totalAccessorWidth = accessor.reduce(
    (acc, cur) => acc + (cur.width ?? 0),
    0
  );

  const { isWidthUnder, isWidthOverflow } = {
    isWidthUnder:
      !!(width && accessor.every((i) => i.width) && totalAccessorWidth < 100) ||
      (!width && totalAccessorWidth < 100),
    isWidthOverflow:
      !!(width && totalAccessorWidth > 100) ||
      (!width && totalAccessorWidth > 100),
  };

  const isWidthUnCompatible = isWidthUnder || isWidthOverflow;

  if (isWidthUnCompatible) {
    console.error(
      "'accessor' prop's width properties should be 100 in total. Each width will set 'auto'."
    );
  }

  const [isFold, setIsFold] = useState(false);

  const toggleFold = () => setIsFold((prev) => !prev);

  const providerValue = {
    isFold,
    toggleFold,
    accessor,
    isWidthUnCompatible,
  };

  const convertedSize = convertTableSizeByType({
    width,
    height,
    data,
    isFold,
  });

  return (
    <CompoundTableContext.Provider value={providerValue}>
      <SC.Table {...convertedSize}>
        <TableCols isToggle={isToggle} onColClick={onColClick} />
        <TableRows
          data={makeUpSortedData({ data, sort })}
          customCellNode={customCellNode}
          onRowClick={onRowClick}
        />
      </SC.Table>
    </CompoundTableContext.Provider>
  );
}
