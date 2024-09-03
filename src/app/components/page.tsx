'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function navBar (){
    const [serch,setSearch] = useState("")
    const [result,setResult]= useState([])

    return(
        <div className="flex flex-col p-[10px] bg-red-100 w-[200px] h-[1080px]">
            <h1 className="p-[20px]">ข้อสอบทั้งหมด</h1>
           <ul className="flex flex-col">
            <Link className="p-[10px] hover:bg-blue-100" href="/">กระดานบอร์ด</Link>
            <Link className="p-[10px] hover:bg-blue-100" href="/">วิชา</Link>
            <Link className="p-[10px] hover:bg-blue-100" href="/">ข้อสอบฝึกฝน</Link>
            <Link className="p-[10px] hover:bg-blue-100" href="/">โปรไฟล์</Link>
            </ul>  
        </div>
    )
}