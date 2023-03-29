import {useEffect, useState} from 'react'
const useOnline = ()=>{

    const[status,setStatus]  = useState(true)
    const online = ()=>{
        setStatus(true)
    }
    const offline = ()=>{
        setStatus(false)
    }
    useEffect(()=>{
    window.addEventListener('online',online)
    window.addEventListener('offline',offline)
    return()=>{
        window.removeEventListener('online',online)
        window.removeEventListener('offline',offline)
    }
    },[])

    return status//returns true or false
}
export default useOnline