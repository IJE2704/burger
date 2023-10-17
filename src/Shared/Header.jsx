import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import burgerLogo from '../assets/burger.png'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 pr-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a ><img className="w-[123px] h-[100px]" src={burgerLogo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className='text-xl font-bold text-red-600'>Home</Link></li>
                        <li><Link to='order' className='text-xl font-bold text-red-600'>Order Now</Link></li>
                        <li><Link to='menu' className='text-xl font-bold text-red-600'>Menu</Link></li>
                        <li><Link to='location' className='text-xl font-bold text-red-600'>Location</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <FaRegCircleUser className='w-[50px] h-[50px] btn-ghost'></FaRegCircleUser>
                </div>
            </div>
        </div>
    );
};

export default Header;