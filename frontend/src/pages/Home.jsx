import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="flex flex-col items-center min-h-screen justify-center bg-black opacity-75">            
            <h1 className="text-3xl font-bold text-white">Welcome to my Website</h1>
            <p className="text-5xl text-white">I am a Proffessional Web Developer</p>
            <div className="flex flex-row justify-center gap-4 p-5">
                <Link to={`https://docs.google.com/document/d/1CUYWjIfGMfBOX5Jgg8QcDA66CIQjomJm/edit?usp=sharing&ouid=103651173969480213220&rtpof=true&sd=true`} className="text-white text-lg underline">Hire Me</Link>
                <Link to={`https://docs.google.com/document/d/1CUYWjIfGMfBOX5Jgg8QcDA66CIQjomJm/edit?usp=sharing&ouid=103651173969480213220&rtpof=true&sd=true`} className="text-white text-lg underline">Resume</Link>
            </div>
        </section>
    );
};

export default Home;
