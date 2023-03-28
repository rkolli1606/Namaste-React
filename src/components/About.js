 import React from 'react'
 import {Outlet} from 'react-router-dom'
 import ProfileClass from './ProfileClass'
 

export default class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log('parent didmount')
    }

    render(){
        console.log("parent render")
        return(
            <>
            <h1>About us page...</h1>
            <p>This is the Namaste React live course chapter 07-finding path.</p>
            <ProfileClass name={"ramu"} xyz={"child1"}/>
            
        </>
        )
    }
}

