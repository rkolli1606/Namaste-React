import {RES_MENU_URL} from '../Contants'
import {useState,useEffect} from 'react'
const useRestaurant = (id)=>{
    const[restaurant,setRestaurant] = useState({})
    
    useEffect(()=>{
        console.log("in use res useeffct")
        getRestrauntInfo()
    },[])
    console.log("console")
    async function getRestrauntInfo(){
        const data = await fetch(RES_MENU_URL+id)
        const json = await data.json()
        console.log(id)
        setRestaurant(json.data)
    }

  return restaurant  
}

export default useRestaurant