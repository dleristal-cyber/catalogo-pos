"use client";
import { useCart } from "@/context/CartContext";
export default function Navbar() {
    const { totalItems } = useCart();

  return (

    <nav className="bg-black text-white p-5 flex justify-between items-center shadow-lg">

      <h1 className="text-3xl font-bold">
        POS STORE
      </h1>

      <div className="flex gap-5">

        <button className="hover:text-gray-300">
          Inicio
        </button>

        <button className="hover:text-gray-300">
          Carrito ({totalItems})
        </button>

      </div>

    </nav>

  );
}