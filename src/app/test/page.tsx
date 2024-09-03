import Head from "next/head";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page ',
}
export default function Hello(){
    return(<>
    <Head>
        <title>hunter</title>
    </Head>
    <div>Fi</div>
    </>
    )
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


// 'use client'
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// async function fetchData() {
//     const { data } = await axios.get("https://dummyjson.com/products?limit=12");
//     return data.products;
// }

// export default function NavBar({ children }) {
//     const [blogs, setBlogs] = useState([]);
//     const [search, setSearch] = useState("");
//     const [result, setResult] = useState([]);

//     useEffect(() => {
//         // ดึงข้อมูลเมื่อคอมโพเนนต์ถูก mount
//         fetchData().then((products) => {
//             setBlogs(products);
//             setResult(products); // เริ่มต้นแสดงข้อมูลทั้งหมด
//         });
//     }, []);

//     useEffect(() => {
//         // ฟิลเตอร์ข้อมูลทุกครั้งที่ search เปลี่ยนแปลง
//         const filteredBlogs = blogs.filter(
//             (blog) =>
//                 blog.title.toLowerCase().includes(search.toLowerCase())
//         );
//         setResult(filteredBlogs);
//     }, [search, blogs]);

//     const handleChange = (e) => {
//         setSearch(e.target.value);
//     };

//     return (
//         <>
//             <div className="flex justify-between bg-blue-100 py-[5px] w-full items-center">
//                 <input
//                     onChange={handleChange}
//                     type="text"
//                     placeholder="Search.."
//                     className="border border-1 rounded-lg px-[10px] m-0 h-[30px]"
//                 />
//                 <div className="mr-10">
//                     <button className="m-2 hover:bg-red-200 p-[10px]">Login</button>
//                     <button className="">Register</button>
//                 </div>
//             </div>
//             <div>
//                 {result.length > 0 ? (
//                     result.map((blog) => (
//                         <div key={blog.id}>
//                             <Link href="/home">{blog.category}</Link>
                            
//                         </div>
//                     ))
//                 ) : (
//                     <p>No results found</p>
//                 )}
//             </div>
//             {children}
//         </>
//     );
// }

// 'use client'
// import { useEffect, useState } from "react"
// import Image from "next/image"
// import axios from "axios"
//  async function Search(){
//     const data = await axios.get("https://dummyjson.com/products?limit=12")
//     console.log(data.data.products);
//     const getData = data.data.products
//       return getData
// }

// export default function navBar ({children}){

//     const blogs = Search()
//     const [search,setSearch] = useState("")
//     const [result,setResult]= useState([])
//     console.log("blogs",blogs);
    
//     const HandleChange=(e)=>{
//         setSearch(e.target.value)
//     }

//     console.log(search);
    
//     // const searchFilter = blogs.filter(
//     //     (blog)=>
//     //         blog.title.toLowerCase().includes(search.toLowerCase())
//     // )

//     // useEffect(()=>{searchFilter()},[])
//     // const roomfind = blog.filter(
//     //     (room) =>
//     //       room.type.toLowerCase().includes(find.toLowerCase()) ||
//     //       room.bed_type.toLowerCase().includes(find.toLowerCase()) ||
//     //       room.room_id.includes(find) ||
//     //       room.status.toLowerCase().includes(find.toLowerCase())
//     //   );

//     return(
//         <>
       
//         {children}
//         </>
//     )
// }