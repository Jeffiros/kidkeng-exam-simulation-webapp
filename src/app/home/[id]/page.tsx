import Image from "next/image";
import Link from "next/link";
export default async function ProductsDetail({ params }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await res.json();

    return (
        <>
        <div className="bg-red-100">
        <div className="p-5 ">
            <div className="flex flex-col items-center ">
            <Image
                className="hover:scale-105 "
                src={product.thumbnail}
                width={300}
                height={300}
                alt={product.title}
              />
            </div>
            <div className="">
            <h1>Product ID: {product.id}</h1>
            <h2>Title: {product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating}</p>
            </div>
        </div>
        <div className=" flex justify-between p-5 ">
        <Link href="/home" className="mr-2 bg-red-200 p-2 rounded-lg hover:scale-105"> Back to Home </Link>
        <button className="mr-2 bg-red-200 p-2 rounded-lg hover:scale-105"> Start Exam </button>
        </div>
        </div>
        </>
        
    );
}