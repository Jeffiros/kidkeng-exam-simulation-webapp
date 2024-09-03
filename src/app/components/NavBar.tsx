'use client'
import { useState } from "react"
import Image from "next/image"

export async function Search(){
    let data = await fetch("https://dummyjson.com/products?limit=12")
    if (!data.ok) {
        throw new Error("cannot");
      }
      return data.json();
}

export default  function navBar (){
    const [serch,setSearch] = useState("")
    const [result,setResult]= useState([])

    
    // const roomfind = room.filter(
    //     (room) =>
    //       room.type.toLowerCase().includes(find.toLowerCase()) ||
    //       room.bed_type.toLowerCase().includes(find.toLowerCase()) ||
    //       room.room_id.includes(find) ||
    //       room.status.toLowerCase().includes(find.toLowerCase())
    //   );

    return(
        <div className="flex justify-between bg-blue-100 py-[5px] w-full items-center">
            <input 
            type="text"
            placeholder="Search.."
            className="border border-1 rounded-lg px-[10px] m-0 h-[30px]  "
            />
            <div className="mr-10">
            <button className="m-2 hover:bg-red-200 p-[10px]">Login</button>
            <button className="">Register</button>
            
            </div>
            
        </div>
    )
}