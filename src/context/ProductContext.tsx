import React, { createContext, useState } from 'react';

type ProviderProps = {
  children?: React.ReactNode;
};

// a helper context for maintaining selected product category and other things
export const ProductContext = createContext<
  | {
      category: string;
      setCategory: (category: string) => void;
    }
  | undefined
>(undefined);

function ProductProvider({ children }: ProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const selectCategory = (category: string) => setSelectedCategory(category);

  return (
    <ProductContext.Provider
      value={{
        category: selectedCategory,
        setCategory: selectCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider };