import React from "react";

import { SC } from "../Table.styled";

import {
  TableAccessorType,
  CustomCellItem,
  AbstractItemType,
} from "../Table.types";
import { useCompoundTableContext } from "../TableContext";

interface TableRowCellsProp<T> {
  acsItem: TableAccessorType;
  dataItem: T;
  customCellNode?: CustomCellItem<T>;
  onClick?: (args: T) => void;
}

export default function TableRowCells<T extends AbstractItemType>({
  acsItem,
  dataItem,
  onClick,
  customCellNode,
}: TableRowCellsProp<T>) {
  const { isWidthUnCompatible } = useCompoundTableContext();

  return (
    <SC.TableCell
      key={`${dataItem.id}${acsItem.value}`}
      align={acsItem.align}
      width={acsItem.width}
      isWidthUnCompatible={isWidthUnCompatible}
      onClick={() => onClick?.(dataItem)}
    >
      {customCellNode?.[acsItem.value]
        ? customCellNode[acsItem.value](dataItem)
        : dataItem[acsItem.value]}
    </SC.TableCell>
  );
}
