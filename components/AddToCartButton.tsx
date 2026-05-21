"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  product,
}: any) {

  const { addToCart } = useCart();

  return (

    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white px-6 py-3 rounded-xl mt-10 w-fit"
    >
      Agregar al carrito
    </button>

  );
}