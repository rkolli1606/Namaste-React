
import {useState} from 'React'
import Logo from '../assets/images/Logo.jpeg'
import {Link} from 'react-router-dom'

// const Title = ()=>(<h1>FoodVilla</h1>)

export const Header = ()=> {
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    
    return(
    <div className="flex justify-between items-center bg-yellow-50">
        <img src={Logo} alt="App logo" className="w-30 h-32"></img>
        <div >
            <ul className="flex gap-10">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to="/instamart">Instamart</Link></li>
                <li>Cart</li>
            </ul>
        </div> 
       {isLoggedIn? <button className="login-btn" onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Logout</button>:<button className="login-btn" onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Login</button>}
    </div>
    )
}
