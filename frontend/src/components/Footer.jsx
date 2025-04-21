import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className="flex flex-col bg-black text-white h-1/6 pl-11 pr-11" style={{bottom: -30}}>
            {/* To Part */}
            <div className="flex justify-center w-full p-4 border-b-2 mb-2 border-white text-3xl">
                About<span className="text-blue-700 ml-1"> Myself</span>
            </div>

            {/* Bottom Part */}
            <div className="flex flex-col sm:flex-row sm:justify-evenly items-center w-full">
                {/* Navigate to */}
                <div className="flex flex-col justify-center items-center mb-3 gap-1">
                    <span className="text-blue-700 text-2xl">Navigate To</span>
                    <Link to={`/about`}>About</Link>
                    <Link to={`https://docs.google.com/document/d/1CUYWjIfGMfBOX5Jgg8QcDA66CIQjomJm/edit?usp=sharing&ouid=103651173969480213220&rtpof=true&sd=true`}>Resume</Link>
                    <Link to={`/projects`}>Projects</Link>
                    <Link to={`/services`}>Services</Link>
                    <Link to={`/admin`}>Admin</Link>
                </div>
                {/* Social Media */}
                <div className="flex flex-col justify-center items-center gap-1">
                    <span className="text-blue-700 text-2xl">Social</span>
                    <Link to={`https://github.com`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl text-gray-700 hover:text-black transition-colors" />
                    </Link>
                    <Link to={`https://twitter.com`} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-3xl text-blue-400 hover:text-blue-500 transition-colors" />
                    </Link>
                    <Link to={`https://facebook.com`} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-3xl text-blue-600 hover:text-blue-700 transition-colors" />
                    </Link>
                    <Link to={`https://instagram.com`} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl text-pink-500 hover:text-pink-600 transition-colors" />
                    </Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer;


