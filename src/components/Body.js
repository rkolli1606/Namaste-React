import React from 'react'
import { RestaurantCard } from "./RestaurantCard"
import { restrautList } from "../Contants"
export const Body = ()=>{
    let search = 'hello'
    const[searchText,setSearchText] = React.useState("")
    const[apidata,setApiData] = React.useState(restrautList)
    function searchRestaurants(text,resData){

        const dat= resData.filter((res)=>{
            console.log(text+""+res.data.name)
            return res.data.name.includes(text)})
            console.log(dat)
            return dat
    }
    return(
        <>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick = {()=>{
                setApiData(searchRestaurants(searchText,apidata))
                console.log()
                }}>
                Search
            </button>
            <div className="restaurant-list">
            {apidata.map((restuarant,index)=>(
            <RestaurantCard {...restuarant.data} key={restuarant.data.id}/>))}
            </div>
        </>
)
}