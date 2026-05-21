import products from "@/data/products";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-10">
        Producto no encontrado
      </div>
    );
  }

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gray-100 p-10">

        <Link
          href="/"
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          ← Regresar
        </Link>

        <div className="bg-white rounded-2xl shadow-lg mt-10 p-10 grid md:grid-cols-2 gap-10">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div className="flex flex-col justify-center">

            <h1 className="text-5xl font-bold">
              {product.name}
            </h1>

            <p className="text-3xl text-gray-600 mt-5">
              ${product.price}
            </p>

            <p className="text-lg text-gray-500 mt-8">
              Producto premium de alta calidad ideal
              para uso diario.
            </p>

            <AddToCartButton product={product} />

          </div>

        </div>

      </main>

    </>

  );
}