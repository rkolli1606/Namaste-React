import {createContext} from 'react'

const UserContext = createContext({
    user:{
    name:'Dummy Name',
    email:'dummy@namastedev.com'}
})

export default UserContext