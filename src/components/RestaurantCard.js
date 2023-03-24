export const RestaurantCard = (props)=>{
    // console.log(props)
    const {name,cuisines,lastMileTravelString,cloudinaryImageId} = props
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId} ></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <p>{lastMileTravelString} minutes</p>
        </div>
    )
}