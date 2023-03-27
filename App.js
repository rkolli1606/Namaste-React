import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './src/components/Header'
import {Body} from './src/components/Body'
import {Footer} from './src/components/Footer'
import About from './src/components/About'
import Error from './src/components/Error'
import RestrauntMenu from './src/components/RestrauntMenu'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import{Outlet} from 'react-router-dom'
const App1 = ()=>{

    return(<>
            <Header/>
            <Outlet/>
            <Footer/>
            </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'))
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App1/>,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'restraunt/:id',
                element:<RestrauntMenu/>
            }
        ]

    }
   
])
root.render(<RouterProvider router={appRouter}/>)
