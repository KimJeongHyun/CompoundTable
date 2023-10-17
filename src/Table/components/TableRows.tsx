import React from "react";
import { useCompoundTableContext } from "../TableContext";

import { SC } from "../Table.styled";
import TableRowCells from "./TableRowCells";

import { CustomCellItem } from "../Table.types";

import { AbstractItemType } from "../Table.types";

interface TableRowsProps<T> {
  data: T[];
  customCellNode?: CustomCellItem<T>;
  onRowClick?: (args: T) => void;
}

export default function TableRows<T extends AbstractItemType>({
  data,
  customCellNode,
  onRowClick,
}: TableRowsProps<T>) {
  const { isFold, accessor } = useCompoundTableContext();

  return (
    <SC.TableRowContainer isFold={isFold}>
      {data.map((dataItem) => (
        <SC.TableRow key={dataItem.id}>
          {accessor.map((acsItem) => (
            <TableRowCells
              key={`${dataItem.id}${acsItem.value}`}
              acsItem={acsItem}
              dataItem={dataItem}
              onClick={onRowClick}
              customCellNode={customCellNode}
            />
          ))}
        </SC.TableRow>
      ))}
    </SC.TableRowContainer>
  );
}
