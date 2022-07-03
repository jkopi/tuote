import React, { createContext, useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';
import forage from '../config/localForage';
import { useToast } from '@chakra-ui/react';

type ProviderProps = {
  children?: React.ReactNode;
};

type ContextProps = {
  cartItems: Product[];
  addCartItem: (item: Product) => void;
  getCartItems: () => Promise<Product[] | null | undefined>;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
  authenticate: () => void; // TODO auth
  isAuthenticated: boolean; // TODO auth
};

export const UserContext = createContext<ContextProps | undefined>(undefined);

function UserProvider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
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

  const addCartItem = async (item: Product) => {
    try {
      // make new array with new product
      let newItems = [...cartItems, item];
      setCartItems(() => newItems);
      // set the copied array to localstorage instead of items in useState
      await forage.setItem<Product[]>('cart', newItems);
      toast({
        status: 'success',
        title: `${item.title} added to cart`,
        duration: 1500,
        isClosable: true,
        position: 'top',
      });
    } catch (err) {
      toast({
        status: 'error',
        title: 'error occurred',
        duration: 1500,
        isClosable: true,
        position: 'top',
      });
      console.error(err);
    }
  };

  const getCartItems = async () => {
    try {
      const items = await forage.getItem<Product[]>('cart');
      return items;
    } catch (error) {
      console.error(error);
    }
  };

  const removeCartItem = async (id: number) => {
    try {
      // return array of cartItems without the deleted item
      const filtered = cartItems.filter((item) => item.id !== id);
      setCartItems(filtered);
      // set filtered result to localStorage
      await forage.setItem<Product[]>('cart', filtered);
    } catch (error) {
      console.error(error);
    }
  };

  const clearCart = async () => {
    try {
      setCartItems([]);
      await forage.removeItem('cart');
    } catch (error) {
      console.error(error);
    }
  };

  // TODO auth
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <UserContext.Provider
      value={{
        cartItems,
        addCartItem: addCartItem,
        getCartItems: getCartItems,
        removeCartItem: removeCartItem,
        clearCart: clearCart,
        authenticate: login,
        isAuthenticated: isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
