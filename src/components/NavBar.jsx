import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
import logo from "../assets/portfolio/logo.png";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'work experience',
            offset: -200,
        },
        {
            id: 3,
            link: 'portfolio',
            offset: -50,
        }
    ]


    return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
        {/* <h1 className="text-5xl font-signature ml-2">Benji</h1> */}
            <img src={logo} alt="Benji Logo"  className="h-16" />
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link, offset}) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:text-customRed transition-colors duration-300">
                    <Link to ={link} smooth duration={500} offset={offset}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size= {30} /> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link, offset}) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-bold py-6 text-4xl hover:text-customRed">
                    <Link
                        onClick={() => setNav(!nav)}
                        to={link}
                        smooth
                        offset={offset}
                        duration={500}
                    >
                        {link}
                    </Link>


                </li>
            ))}
            </ul>
        )}
    </div>

    )
}

export default NavBar