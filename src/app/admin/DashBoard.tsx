"use Client"

import { useState, useEffect } from "react"
import Image from "next/image";


interface Book {
    cover: string;
    title: string;
    releaseDate: string;
}
export default function Dashboard() {
    const [product, setProduct] = useState<Book[]>([]);

    const fetchBooks = async () => {
        try {
            const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const books = await res.json();
            setProduct(books);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div className="bg-blue-200 h-screen flex justify-center items-center">
            <div className="ml-6 lg:grid lg:grid-cols-4 gap-5 ">
                {product.map((book, i) => (
                    <div className="border border-1 m-5 w-[300px] bg-white flex flex-col" key={i}>
                        <img src={book.cover} className="h-[300px]"/>
                        <ul>
                            <li>{book.title}</li>
                            <li>{book.releaseDate}</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

