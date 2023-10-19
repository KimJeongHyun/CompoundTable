import { createContext, useContext } from "react";

interface CompoundTableContextStateType {
  isFold: boolean;
  toggleFold: () => void;
  data: any[];
  isWidthCompatible: boolean;
  isHeadSticky?: boolean;
  childrenLabelWidth: { label: string; width: number }[];
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
