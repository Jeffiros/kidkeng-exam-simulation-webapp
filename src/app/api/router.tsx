import { error } from "console"

export async function Test(){
    let GetData = await fetch("https://dummyjson.com/products")
    // let Data = GetData.json()
    // console.log("hi");
    
    // return Data
    if(!GetData.ok){
        throw new Error('cannot')
    }
    return GetData.json()
}