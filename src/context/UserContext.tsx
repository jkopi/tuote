import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Product } from '../interfaces/Product';
import forage from '../config/localForage';

type Props = {
  children?: React.ReactNode;
};

export const UserContext = createContext<
  | {
      cartItems: Product[];
      favorites: Product[];
      addCartItem: (item: Product) => void;
      addFavorite: (favorite: Product) => void;
    }
  | undefined
>(undefined);

function UserProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addCartItem = (item: Product) => {
    setCartItems((prev) => [...prev, item]);
    console.log(cartItems);
  };

  const addFavorite = (favorite: Product) => {
    setFavorites((prev) => [...prev, favorite]);
    console.log(favorites);
  };

  return (
    <UserContext.Provider value={{ cartItems, favorites, addCartItem: addCartItem, addFavorite: addFavorite }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
