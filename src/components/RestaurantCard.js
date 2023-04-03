import {url} from '../Contants.js'
import {useContext} from 'react'
import UserContext from '../utils/userContext'

export const RestaurantCard = (props)=>{
    const data  = useContext(UserContext)
    const {name,cuisines,lastMileTravelString,cloudinaryImageId,user} = props
    return (
        <div className="w-48 h-auto bg-pink-50">
            <img src={url +
          cloudinaryImageId} ></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <p>{lastMileTravelString}</p>
          <p>{data?.user?.name}</p>
        </div>
    )
}