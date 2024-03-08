import React, { createContext, useState } from "react";
import { CategoryType, SubCategoryType } from "./types";

interface Props {
  children: JSX.Element;
}

const initialContextValue = {
  categoryState: undefined,
  setCategoryState: () => {},
  subCategoryState: undefined,
  setSubCategoryState: () => {},
  activeTabId: undefined,
  setActiveTabId: () => {},
  subPageIndex: undefined,
  setSubPageIndex: () => {},
  categoryId: undefined,
  setCategoryId: () => {},
  productPageIndex: undefined,
  setProductSubPageIndex: () => {},
  pageIndex: undefined,
  setPageIndex: () => {},
  subCategoryId: undefined,
  setSubCategoryId: () => {},
};

interface AppContextType {
  categoryState?: CategoryType[];
  setCategoryState: React.Dispatch<
    React.SetStateAction<CategoryType[] | undefined>
  >;
  subCategoryState?: SubCategoryType[];
  setSubCategoryState: React.Dispatch<
    React.SetStateAction<SubCategoryType[] | undefined>
  >;
  subPageIndex?: number;
  setSubPageIndex: React.Dispatch<React.SetStateAction<number>>;
  categoryId?: number;
  setCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
  productPageIndex?: number;
  setProductSubPageIndex: React.Dispatch<React.SetStateAction<number>>;
  pageIndex?: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  subCategoryId?: number;
  setSubCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const Context = createContext<AppContextType>(initialContextValue);

export default function AppContext({ children }: Props) {
  const [categoryState, setCategoryState] = useState<CategoryType[]>();
  const [subCategoryState, setSubCategoryState] = useState<SubCategoryType[]>();
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [subCategoryId, setSubCategoryId] = useState<number | undefined>();
  const [subPageIndex, setSubPageIndex] = useState(1);
  const [productPageIndex, setProductSubPageIndex] = useState(1);
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <Context.Provider
      value={{
        categoryState,
        setCategoryState,
        subCategoryState,
        setSubCategoryState,
        pageIndex,
        setPageIndex,
        subPageIndex,
        setSubPageIndex,
        categoryId,
        setCategoryId,
        productPageIndex,
        setProductSubPageIndex,
        subCategoryId,
        setSubCategoryId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
