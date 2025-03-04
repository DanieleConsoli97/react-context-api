import { Link, NavLink } from "react-router-dom";
const navBar= () =>{
    return(
        <nav>
            <ul>
                <li><Link to="/" >Home Page</Link></li>
                <li><NavLink to="/Chisiamo">Chi Siamo</NavLink></li>
                <li> <NavLink to="/Listapost">Posts</NavLink></li>
            </ul>
        </nav>

    )
}
export default navBar