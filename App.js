import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './src/components/Header'
import {Body} from './src/components/Body'
import {Footer} from './src/components/Footer'



const App1 = ()=>{
    return(<>
            <Header/>
            <Body/>
            <Footer/>
            </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(div)
root.render(<App1/>)
