import React, { createContext, useState } from 'react';

type ProviderProps = {
  children?: React.ReactNode;
};

export enum FilterBy {
  SALE = 'SALE',
  ORIGINAL = 'ORIGINAL',
}

type ContextProps = {
  category: string;
  pageNumber: number;
  productLimit: number;
  paginationSkip: number;
  firstPage: () => void;
  prevPage: () => void;
  nextPage: () => void;
  selectedProduct: string;
  setProduct: (name: string) => void;
  setCategory: (category: string) => void;
  searchHistory?: string[];
  filterRule: FilterBy;
  setFilterRule: (rule: FilterBy) => void;
};

export const ProductContext = createContext<ContextProps | undefined>(undefined);

function ProductProvider({ children }: ProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentProductPage, setCurrentProductPage] = useState<number>(1);
  const [productLimit, setProductLimit] = useState<number>(9);
  const [skip, setSkip] = useState<number>(0);
  const [product, setProduct] = useState<string>('');

  const handleSetCategory = (newCategory: string) =>
    setSelectedCategory((prev) => {
      // if new category is selected, set pages and skip to 0 and set new state
      console.log(`selectedCategory ${selectedCategory}, prev ${prev}, newCategory ${newCategory}`)
      if (selectedCategory === prev) {
        setCurrentProductPage(0);
        setSkip(0);
        return newCategory;
      }
      return prev;
    });

  const goToFirstPage = () => {
    setSkip(0);
    setCurrentProductPage(1);
  }

  const goToPrevPage = () => {
    setSkip((prev) => Math.max(prev - 9, 0));
    setCurrentProductPage((prev) => prev - 1);
  }

  const goToNextPage = () => {
    setSkip((prev) => prev + 9);
    setCurrentProductPage((prev) => prev + 1);
  }

  // TODO
  const goToLastPage = () => {}

  // TODO: if product is successfully searched, it should be appendended into searches state
  const [searches, setSearches] = useState<string[]>([]);
  const [filterRule, setFilterRule] = useState<FilterBy>(FilterBy.ORIGINAL);

  const selectProduct = (name: string) => setProduct(name);
  // TODO
  const selectFilterRule = (rule: FilterBy) => setFilterRule(rule);

  return (
    <ProductContext.Provider
      value={{
        category: selectedCategory,
        pageNumber: currentProductPage,
        productLimit: productLimit,
        paginationSkip: skip,
        firstPage: goToFirstPage,
        nextPage: goToNextPage,
        prevPage: goToPrevPage,
        setProduct: selectProduct,
        selectedProduct: product,
        setCategory: handleSetCategory,
        searchHistory: searches,
        filterRule: filterRule,
        setFilterRule: selectFilterRule,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider };
