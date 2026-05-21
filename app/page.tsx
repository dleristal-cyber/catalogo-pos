"use client";

import products from "@/data/products";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Home() {

  const [category, setCategory] =
    useState("Todos");

  const { addToCart } = useCart();

  const filteredProducts =
    category === "Todos"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gray-50 px-8 py-12">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h1 className="text-6xl font-bold text-black">
              POS Store
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Punto de venta minimalista
            </p>

          </div>

          <div className="flex justify-center gap-4 mb-14 flex-wrap">

            <button
              onClick={() => setCategory("Todos")}
              className={`px-6 py-3 rounded-full transition font-medium ${
                category === "Todos"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              Todos
            </button>

            <button
              onClick={() => setCategory("Tecnología")}
              className={`px-6 py-3 rounded-full transition font-medium ${
                category === "Tecnología"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              Tecnología
            </button>

            <button
              onClick={() => setCategory("Ropa")}
              className={`px-6 py-3 rounded-full transition font-medium ${
                category === "Ropa"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              Ropa
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
              >

                <Link href={`/producto/${product.id}`}>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover hover:scale-105 transition duration-300"
                  />

                </Link>

                <div className="p-6">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-semibold text-black">
                        {product.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {product.category}
                      </p>

                    </div>

                    <p className="text-2xl font-bold text-black">
                      ${product.price}
                    </p>

                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-black text-white py-3 rounded-2xl mt-6 hover:bg-gray-800 transition"
                  >
                    Agregar al carrito
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </>

  );
}