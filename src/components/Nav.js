import React from 'react'
import {Link} from 'react-router-dom';
import { AiFillHome,AiOutlineBook,AiOutlinePhone } from "react-icons/ai";

const Nav = () => {
    return (
        <div className='navbar' > 
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <img src="/images/logo.jpg" alt="Logo" />
                    </div>
                    <div className="nav__right">
                       <ul>
                           <li>
                                <Link to='/'>
                                <a href="">
                                        <AiFillHome className="homeIcon" />
                                </a>
                                   
                                </Link>
                           </li>
                           <li>
                                <Link to='/about'>
                                <a href=""><AiOutlineBook className='aboutIcon' /></a>
                                    
                                </Link>
                           </li>
                           <li>
                                <Link to='/contact'>
                                    <a href=""><AiOutlinePhone  className='contactIcon' /></a>
                                </Link>
                           </li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
