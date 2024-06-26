import "./Nav.scss";
import { Link, NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className="topnav" id="myTopnav">
            <NavLink to="/" exact={true}>Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/weather-app">Weather App</NavLink>
            <NavLink to="/otp">OTP App</NavLink>
            <NavLink to="/about">About</NavLink>
        </div >
    )
}
export default Nav