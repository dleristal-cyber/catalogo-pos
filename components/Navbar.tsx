"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {

  const { totalItems } = useCart();

  return (

    <nav className="bg-black text-white p-5 flex justify-between items-center">

      <Link href="/">

        <h1 className="text-3xl font-bold cursor-pointer">
          POS
        </h1>

      </Link>

      <Link href="/carrito">

        <button className="hover:text-gray-300 text-xl">

          Carrito ({totalItems})

        </button>

      </Link>

    </nav>

  );
}