import React, { useState , useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import './Navbar.css'
import logo from '../images/logo1.png'
import { UserContext } from '../../App'
import axios from 'axios';
// import RegisterNav from './RegisterNav'
function Navbar() {
    const [visible, setVisible] = useState(false)

    async function toggleVisible(){
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50){
        setVisible(true)
        }
        else if (scrolled <= 50){
        setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);

    const [click, setclick] = useState(false);
    const handleClick = ()=> setclick(!click);
    const { state, dispatch} = useContext(UserContext);
    const RenderNav = () => {
        if(!state){
            return(
                <>
                    <li className="nav-items">  
                        <NavLink to='/' onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-items">  
                        <NavLink to='/About'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-items submenu">  
                        <NavLink to='/Courses'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Courses
                        </NavLink>
                    </li>
                    <li className="nav-items">  
                        <NavLink to='/Contact'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-items">  
                        <NavLink to='/SignIn'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-items">  
                        <NavLink to='/signup-email'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Register
                        </NavLink>
                    </li>
                    
                </>
            )
        }else{
            return(
                <>
                    <li className="nav-items">  
                        <NavLink to='/'   onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-items">  
                        <NavLink to='/About'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-items submenu">  
                        <NavLink to='/Courses'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Courses
                        </NavLink>
                    </li>
                    <li className="nav-items">  
                        <NavLink to='/Contact'  onClick={handleClick} exact activeClassName="navbar__link--active" className="nav-links">
                            Contact
                        </NavLink>
                    </li>
                        
                    <li className="nav-items">  
                        <p onClick={(e)=>{
                            e.preventDefault();
                            window.location.href="https://testapic.herokuapp.com/Logout";
                            // axios
                            // .get("https://testapic.herokuapp.com/logout",{ withCredentials: true })
                            // .then(response => {
                            //     if(response.status===200){
                            //         dispatch({type:"USER",payload:false});
                            //     }else{
                            //         dispatch({type:"USER",payload:true});
                            //     }
                            // })
                            // .catch(error => {
                            // console.log("check login error",error);
                            // });
                            
                        }}  className="nav-links logout">
                            Logout
                        </p>
                    </li>
                </>
            )
        }
    }
    
    return (
        <>
            <div className={click ? 'navbar active' : 'navbar' } style={{backgroundColor:'#006FBF',}} >
                <div className={visible || click ? ' navbar-container container active' : 'navbar-container container'} style={{}}>
                    <div className="logo">
                        <NavLink to='/' className="navbar-logo">
                        <img src={logo} alt="logo" width="89"/>
                        </NavLink>
                    </div>
                </div>
                
                <div className="menu-icons" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                
                <div className={click ? 'nav-lists active' : 'nav-lists'}>
                    <ul className="nav-menu">
                        <RenderNav />
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Navbar
