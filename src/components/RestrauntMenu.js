import {useParams} from 'react-router-dom'
import {RES_MENU_URL} from '../Contants'
import {url} from '../Contants'
import{useState,useEffect} from 'react'
import useRestaurant from '../utils/useRestaurant'
const RestrauntMenu = ()=>{
    const {id} = useParams()
    const restaurant = useRestaurant(id)
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