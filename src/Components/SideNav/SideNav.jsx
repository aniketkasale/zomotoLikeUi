import "../SideNav/sidenav.css"
function SideNav() {
    return(
        <div className="sidenav">
            <header>
                <center>
                <h1>Lorem <br /> Ipsum</h1>
                </center>
                
            </header>
            <center>
                <span>About</span> 
                <span>Services</span> 
                <span>Cuisine</span> 
                <span>Gallary</span> 
                <span>Contact</span> 
                <span>Book</span> 
            </center>
            <button className="btn">Cart</button>
        </div>
    )

    
}
export default SideNav;