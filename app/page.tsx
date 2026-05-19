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

      <main className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-5xl font-bold text-center mb-10">
          Punto de Venta
        </h1>

        <div className="flex justify-center gap-5 mb-10">

          <button
            onClick={() =>
              setCategory("Todos")
            }
            className="bg-black text-white px-5 py-2 rounded-lg"
          >
            Todos
          </button>

          <button
            onClick={() =>
              setCategory("Tecnología")
            }
            className="bg-white px-5 py-2 rounded-lg shadow"
          >
            Tecnología
          </button>

          <button
            onClick={() =>
              setCategory("Ropa")
            }
            className="bg-white px-5 py-2 rounded-lg shadow"
          >
            Ropa
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (

            <Link
              key={product.id}
              href={`/producto/${product.id}`}
            >

              <div
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    ${product.price}
                  </p>

                  <button
                    onClick={(e) => {

                      e.preventDefault();

                      addToCart(product);

                    }}
                    className="bg-black text-white px-5 py-2 rounded-lg mt-5 w-full"
                  >
                    Agregar al carrito
                  </button>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </main>

    </>

  );
}