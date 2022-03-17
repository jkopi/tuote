import React, { createContext, useState } from 'react';

type ProviderProps = {
  children?: React.ReactNode;
};

export enum FilterBy {
  SALE = 'SALE',
  ORIGINAL = 'ORIGINAL'
}

// a helper context for maintaining selected product category and other things
export const ProductContext = createContext<
  | {
      category: string;
      setCategory: (category: string) => void;
      searchHistory?: string[];
      filterRule: FilterBy;
      setFilterRule: (rule: FilterBy) => void;
    }
  | undefined
>(undefined);

function ProductProvider({ children }: ProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  // TODO: if product is successfully searched, it should be appendended into searches state
  const [searches, setSearches] = useState<string[]>([]);
  const [filterRule, setFilterRule] = useState<FilterBy>(FilterBy.ORIGINAL);

  const selectCategory = (category: string) => setSelectedCategory(category);
  const selectFilterRule = (rule: FilterBy) => setFilterRule(rule);

  return (
    <ProductContext.Provider
      value={{
        category: selectedCategory,
        setCategory: selectCategory,
        searchHistory: searches,
        filterRule: filterRule,
        setFilterRule: selectFilterRule
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider };
