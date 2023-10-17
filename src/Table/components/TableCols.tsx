import React from "react";
import { useCompoundTableContext } from "../TableContext";

import { SC } from "../Table.styled";

import { TableAccessorType } from "../Table.types";

interface TableColsProps {
  isToggle: boolean;
  onColClick?: (args: TableAccessorType) => void;
}

export default function TableCols({ isToggle, onColClick }: TableColsProps) {
  const { toggleFold, accessor, isWidthUnCompatible } =
    useCompoundTableContext();

  return (
    <SC.TableRow isCol onClick={() => isToggle && toggleFold()}>
      {accessor.map((i) => (
        <SC.TableCell
          key={i.value}
          width={i.width}
          isWidthUnCompatible={isWidthUnCompatible}
          onClick={() => onColClick?.(i)}
        >
          {i.label}
        </SC.TableCell>
      ))}
    </SC.TableRow>
  );
}
