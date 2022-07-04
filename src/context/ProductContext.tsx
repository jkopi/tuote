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
  const [product, setProduct] = useState<string>('');

  // TODO: if product is successfully searched, it should be appendended into searches state
  const [searches, setSearches] = useState<string[]>([]);
  const [filterRule, setFilterRule] = useState<FilterBy>(FilterBy.ORIGINAL);

  const selectCategory = (category: string) => setSelectedCategory(category);
  const selectProduct = (name: string) => setProduct(name);
  // TODO
  const selectFilterRule = (rule: FilterBy) => setFilterRule(rule);

  return (
    <ProductContext.Provider
      value={{
        category: selectedCategory,
        setProduct: selectProduct,
        selectedProduct: product,
        setCategory: selectCategory,
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
