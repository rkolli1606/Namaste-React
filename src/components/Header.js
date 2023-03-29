
import {useState} from 'React'
import Logo from '../assets/images/Logo.jpeg'
import {Link} from 'react-router-dom'

// const Title = ()=>(<h1>FoodVilla</h1>)

export const Header = ()=> {
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    
    return(
    <div className="header">
        <img src={Logo} alt="App logo" className="logo"></img>
        <div className="nav-items">
            <ul>
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
