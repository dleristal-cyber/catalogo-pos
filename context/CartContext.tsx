"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {

    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  const addToCart = (product: any) => {

    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (exists) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  };

  const removeFromCart = (id: number) => {

    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );

  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        totalItems,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export const useCart = () =>
  useContext(CartContext);