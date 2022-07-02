import React, { createContext, useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';
import forage from '../config/localForage';
import { useToast } from '@chakra-ui/react';
import { getCartItemsFromLocalStorage } from '../utils';

type ProviderProps = {
  children?: React.ReactNode;
};

export const UserContext = createContext<
  | {
      cartItems: Product[];
      favorites: Product[];
      addCartItem: (item: Product) => void;
      addFavorite: (favorite: Product) => void;
      getCartItems: () => Promise<Product[] | null | undefined>;
      removeCartItem: (id: number) => void;
      authenticate: () => void;
      isAuthenticated: boolean;
    }
  | undefined
>(undefined);

function UserProvider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const getStoredCart = async () => {
      try {
        const res = await forage.getItem<Product[]>('cart');
        setCartItems(res ?? []);
      } catch (error) {
        return [];
      }
    };
    getStoredCart();
  }, []);

  // toaster
  const toast = useToast();

  const addCartItem = (item: Product) => {
    setCartItems((prev) => [...prev, item]);
    forage
      .setItem<Product[]>('cart', [...cartItems])
      .then(() => {
        toast({
          status: 'success',
          title: `${item.title} added to cart`,
          duration: 1500,
          isClosable: true,
          position: 'top',
        });
      })
      .catch((err: Error) => {
        toast({
          status: 'error',
          title: 'error occurred',
          duration: 1500,
          isClosable: true,
          position: 'top',
        });
        console.error(err);
      });

    console.log(cartItems);
  };

  const getCartItems = async () => {
    try {
      const items = await forage.getItem<Product[]>('cart');
      return items;
    } catch (error) {
      console.error(error);
    }
  };

  const addFavorite = (favorite: Product) => {
    forage
      .setItem('favorites', favorite)
      .then(() => {
        // TODO: trigger toast alert
        setFavorites((prev) => [...prev, favorite]);
      })
      .catch((err: Error) => {
        // TODO: trigger toast alert
        console.error(err);
      });

    console.log(favorites);
  };

  const removeCartItem = (id: number) => {
    forage.removeItem('cart');
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const removeFavorite = (id: number) => setFavorites(favorites.filter((item) => item.id !== id));

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <UserContext.Provider
      value={{
        cartItems,
        favorites,
        addCartItem: addCartItem,
        addFavorite: addFavorite,
        getCartItems: getCartItems,
        removeCartItem: removeCartItem,
        authenticate: login,
        isAuthenticated: isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
