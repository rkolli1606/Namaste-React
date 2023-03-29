import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './src/components/Header'
import {Body} from './src/components/Body'
import {Footer} from './src/components/Footer'
//import About from './src/components/About'
import Error from './src/components/Error'
import RestrauntMenu from './src/components/RestrauntMenu'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import{Outlet} from 'react-router-dom'
import Profile from './src/components/Profile'
import Shimmer from './src/components/Shimmer'
//import Instamart from './src/components/Instamart'

const About = lazy(()=>import('./src/components/About')) //without suspense
const Instamart = lazy(()=>import('./src/components/Instamart'))//with suspense

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
                element:<About/>,
                children:[
                    {
                        path:'profile',
                        element:<Profile/>
                    }
                ]
            },
            {
                path:'restraunt/:id',
                element:<RestrauntMenu/>
            },
            {
                path:'instamart',
                element:<Suspense fallback={<Shimmer/>}>
                        <Instamart/>
                    </Suspense>
            }
        ]

    }
   
])
root.render(<RouterProvider router={appRouter}/>)
