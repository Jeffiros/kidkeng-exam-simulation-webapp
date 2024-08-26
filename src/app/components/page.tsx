'use client'
import { useState } from "react"
import Image from "next/image"

export default function navBar (){
    const [serch,setSearch] = useState("")
    const [result,setResult]= useState([])

    return(
        <div >
           <ul>
            <li>Exam</li>
            <li>Dash</li>
            <li>Sub</li>
            <li>practice</li>
            <li>profile</li>
            </ul>  
        </div>
    )
}