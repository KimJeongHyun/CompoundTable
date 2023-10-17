import React, { useState } from "react";

import CompoundTableContext from "./TableContext";
import { SC } from "./Table.styled";
import { TableCols, TableRows } from "./components/";

import { TableProps, AbstractItemType } from "./Table.types";
import {
  convertTableSizeByType,
  getWidthLayoutCondition,
  makeUpSortedData,
} from "./utils";

export default function Table<T extends AbstractItemType>({
  data = [],
  accessor = [],
  customCellNode,
  width,
  height,
  onRowClick,
  onColClick,
  isToggle = false,
  sort,
}: TableProps<T>) {
  const [isFold, setIsFold] = useState(false);

  const toggleFold = () => setIsFold((prev) => !prev);

  const convertedSize = convertTableSizeByType({
    width,
    height,
    data,
    isFold,
  });

  const { isWidthUnCompatible } = getWidthLayoutCondition({
    accessor,
    width,
    height,
  });

  const providerValue = {
    isFold,
    toggleFold,
    accessor,
    isWidthUnCompatible,
  };

  if (isWidthUnCompatible) {
    console.error(
      "'accessor' prop's width properties should be 100 in total. Each width will set 'auto'."
    );
  }

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
