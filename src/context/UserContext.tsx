import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Product } from '../interfaces/Product';
import forage from '../config/localForage';
import { useToast } from '@chakra-ui/react';

type Props = {
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
    }
  | undefined
>(undefined);

function UserProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

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

  const removeCartItem = (id: number) => setCartItems(cartItems.filter((item) => item.id !== id));

  const removeFavorite = (id: number) => setFavorites(favorites.filter((item) => item.id !== id));

  return (
    <UserContext.Provider
      value={{
        cartItems,
        favorites,
        addCartItem: addCartItem,
        addFavorite: addFavorite,
        getCartItems: getCartItems,
        removeCartItem: removeCartItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
