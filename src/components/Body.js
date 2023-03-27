import {React,useState,useEffect} from 'react'
import { RestaurantCard } from "./RestaurantCard"
import { restrautList } from "../Contants"
import Shimmer from './Shimmer.js'
import {createBrowserRouter} from 'react-router-dom'

export const Body = ()=>{
    let search = 'hello'
    const[searchText,setSearchText] = useState("")
    const [restaurants, setRestaurants] = useState(restrautList);
    //const[apidata,setApiData] = React.useState(restrautList)
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    
    function searchRestaurants(text,resData){
        const dat= resData.filter((res)=>{
            console.log(text+""+res.data.name)
            return res?.data?.name.includes(text)})

            return dat
        }
    useEffect(()=>{
        getRestaurants();
    },[])
    async function getRestaurants(){
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    return(filteredRestaurants.length===0)?(<Shimmer/>):(
        <>  
            <div className="search-div">
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick = {()=>{
                    setFilteredRestaurants(searchRestaurants(searchText,allRestaurants))
                    }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
            {filteredRestaurants.map((restuarant,index)=>(
            <RestaurantCard {...restuarant.data} key={restuarant.data.id}/>))}
            </div>
        </>
)
}