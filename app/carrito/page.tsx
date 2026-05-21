"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  return (

    <>

      <Navbar />

      <div className="bg-gray-100 px-10 pt-10">

        <Link
          href="/"
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          ← Regresar
        </Link>

      </div>

      <main className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Carrito
        </h1>

        {cart.length === 0 ? (

          <div className="bg-white p-10 rounded-2xl shadow-lg">

            <p className="text-2xl">
              El carrito está vacío
            </p>

          </div>

        ) : (

          <>

            <div className="space-y-5">

              {cart.map((item: any) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg p-5 flex justify-between items-center"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 object-cover rounded-xl"
                    />

                    <div>

                      <h2 className="text-2xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        Cantidad: {item.quantity}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-2xl font-bold">
                      $
                      {item.price * item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded-lg mt-3"
                    >
                      Eliminar
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

              <h2 className="text-4xl font-bold">
                Total: ${total}
              </h2>

              <button
                onClick={clearCart}
                className="bg-black text-white px-6 py-3 rounded-xl mt-5"
              >
                Vaciar carrito
              </button>

            </div>

          </>

        )}

      </main>

    </>

  );
}