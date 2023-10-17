import { createContext, useContext } from "react";
import { TableAccessorType } from "./Table.types";

interface CompoundTableContextStateType {
  isFold: boolean;
  toggleFold: () => void;
  accessor: TableAccessorType[];
  isWidthUnCompatible: boolean;
}

const CompoundTableContext =
  createContext<CompoundTableContextStateType | null>(null);

export const useCompoundTableContext = () => {
  const context = useContext(CompoundTableContext);

  if (!context) {
    throw new Error(
      "This hook is for component be wrapped up in CompoundTableContext.Provider"
    );
  }

  return context;
};

export default CompoundTableContext;
