function Headertop(){
    return(<>
        <div className="Head-top">
            <nav>
                <ul>
                    <li><a href="">Cart</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Home</a></li>
                </ul>
            </nav>
        </div>
        <div  className="Search-box">
            <input type="text" className="Search" placeholder="Search"/>
            <button className="Search-button">Search</button>
        </div>
    </>);
}
export default Headertop;