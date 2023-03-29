import {useState,useEffect} from 'react'
import {RES_LIST_URL} from '../Contants'

const useGetRestaurants = ()=>{
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data = await fetch(RES_LIST_URL)
        const json = await data.json()
        //console.log(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    return [restaurants,allRestaurants,filteredRestaurants]
}

export default useGetRestaurants