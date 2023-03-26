import {url} from '../Contants.js'
export const RestaurantCard = (props)=>{
    // console.log(props)
    const {name,cuisines,lastMileTravelString,cloudinaryImageId} = props
    return (
        <div className="card">
            <img src={url +
          cloudinaryImageId} ></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <p>{lastMileTravelString} minutes</p>
        </div>
    )
}