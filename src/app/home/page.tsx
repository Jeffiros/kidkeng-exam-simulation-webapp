'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export async function Test() {
  let GetData = await fetch("https://dummyjson.com/products?limit=12");

  if (!GetData.ok) {
    throw new Error("cannot fetch data");
  }
  return GetData.json();
}

export default function Layout() {
  const [searchTerm, setSearchTerm] = useState(""); // Manage State
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store Original Data

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term
    if (event.target.value === "") {
      setFilteredData(originalData); // Reset to original data if search is cleared
    } else {
      const filtered = originalData.filter((blogs) =>
      blogs.category.toLowerCase().includes(searchTerm.toLowerCase())||
      blogs.title.toLowerCase().includes(searchTerm.toLowerCase())
     
      
      );
      setFilteredData(filtered); // Update filtered data
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Test();
      setOriginalData(data.products); // Store fetched data
      setFilteredData(data.products); // Set initial filtered data
    };
    fetchData();
  }, []);

  return (
    <>
    <Head>
      <title>hunter</title>
    </Head>
      <nav className="flex justify-between bg-red-100 py-[5px] w-full items-center">
        <input
          type="text"
          placeholder="Search.."
          className="border border-1 rounded-lg px-[10px] m-2 h-[30px]"
          value={searchTerm}
          onChange={handleSearch} // Handle Search Input
        />
        <div className="mr-10">
          <button className="m-2 hover:bg-red-200 p-[10px]">Login</button>
          <button className="">Register</button>
        </div>
      </nav>
      <div className="flex flex-wrap bg-red-200">
        {filteredData.map((blogs, index) => {
          return (
            <div className="border border-1 m-5 w-[300px] h-fit bg-white" key={index}>
              <Image
                className="hover:bg-red-500"
                src={blogs.thumbnail}
                width={300}
                height={300}
                alt={blogs.title}
              />
              <ul>
                <li className="p-2">ราคา : {blogs.price} บาท</li>
                <li className="p-2">วิชา : {blogs.category}</li>
                <li className="p-2">อาจารย์ : {blogs.title.slice(0,25)+ " ..."}</li>
                <li className="p-2">rating วิชา : {blogs.rating}</li>
                <li className="p-2">อธิบายเพิ่มเติม : {blogs.description.slice(0,100)+" ..."}</li>
              </ul>
              <div className="flex justify-end m-2 ">
              <Link href={"/course/"+blogs.id} className="bg-red-200 p-2 rounded-lg">More detail </Link>
              </div>
              
            </div>
            
          );
        })}
      </div>
    </>
  );
}


// import NavBar from "../components/NavBar";
// import SideBar from "../components/sidebar";
// import Image from "next/image";

// export async function Test() {
//   let GetData = await fetch("https://dummyjson.com/products?limit=12");
//   // let Data = GetData.json()
//   // console.log("hi");

//   // return Data
//   if (!GetData.ok) {
//     throw new Error("cannot");
//   }
//   return GetData.json();
// }

// export default async function Layout() {
//   const data = await Test();
//   let blog = data.products;
//   console.log("blog", blog);

//   return (
//     <>
//      <div className="flex justify-between bg-blue-100 py-[5px] w-full items-center">
//             <input 
//             // onChange={HandleChange}
//             type="text"
//             placeholder="Search.."
//             className="border border-1 rounded-lg px-[10px] m-0 h-[30px]  "
//             />
//             <div className="mr-10">
//             <button className="m-2 hover:bg-red-200 p-[10px]">Login</button>
//             <button className="">Register</button>
            
//             </div>
            
//         </div>
//       <div className="flex">
//         <div className="w-full">
//           {/* <NavBar /> */}
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {blog.map((blogs, index) => {
//           return (
//             <>
            
//             <div className="border border-1 m-5 w-[300px] h-fit " key={index}>
//                 <Image className="hover:bg-red-500" src={blogs.thumbnail} width={300} height={300} alt={blogs.title}/>
//             <ul >
//               <li className="p-2">ราคา : {blogs.price} บาท</li>
//               <li className="p-2">วิชา : {blogs.category}</li>
//               <li className="p-2">อาจารย์ : {blogs.title}</li>
//               <li className="p-2">rating วิชา : {blogs.rating}</li>
//               <li className="p-2">อธิบายเพิ่มเติม : {blogs.description}</li>
//             </ul>
//             </div>
            
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }
