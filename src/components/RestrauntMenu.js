import {useParams} from 'react-router-dom'
import {url} from '../Contants'
import{useState,useEffect} from 'react'
const RestrauntMenu = ()=>{
    const {id} = useParams()
    const[restaurant,setRestaurant] = useState({})
    console.log(id)
    useEffect(()=>{
        getRestrauntInfo()
    },[])

    async function getRestrauntInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"
        )
        const json = await data.json()
        console.log(json)
        setRestaurant(json.data)
    }

    return (
        <>
            <h1>Restraunt name:{id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={url+restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating}</h3>
        </>
    )
}

export default RestrauntMenu