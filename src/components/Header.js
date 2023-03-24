
const Title = ()=>(<h1>FoodVilla</h1>)

export const Header = ()=> {return(
    <div className="header">
        <img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="App logo" className="logo"></img>
        <Title/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    )
}
