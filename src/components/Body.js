import {React,useState,useEffect} from 'react'
import { RestaurantCard } from "./RestaurantCard"
import { restrautList } from "../Contants"
import Shimmer from './Shimmer.js'
import {createBrowserRouter} from 'react-router-dom'
import {searchRestaurants} from '../utils/helper.js'
import {Link} from 'react-router-dom'
import useGetRestaurants from '../utils/useGetRestaurants'
import useOnline from '../utils/useOnline'

export const Body = ()=>{
    let search = 'hello'
    const[searchText,setSearchText] = useState("")
    const [restaurant,allRestaurants,filteredRestaurants] = useGetRestaurants()
    const status = useOnline()

    if(!    status){
        return(<h1>You are offline. Check your internet connection</h1>)
    }

    return(filteredRestaurants.length===0)?(<Shimmer/>):(
        <>  
            <div className="m-2 p-2 bg-pink-50">
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="bg-green-400 p-2 m-4 rounded" onClick = {()=>{
                    setFilteredRestaurants(searchRestaurants(searchText,allRestaurants))
                    }}>
                    Search
                </button>
            </div>
            <div className="flex flex-wrap gap-5">
            {filteredRestaurants.map((restuarant,index)=>(
            <Link to={"restraunt/"+restuarant.data.id} key={restuarant.data.id}><RestaurantCard {...restuarant.data} key={restuarant.data.id}/></Link>))}
            </div>
        </>
)
}