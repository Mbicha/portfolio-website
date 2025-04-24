import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="flex flex-row w-full min-h-screen justify-center bg-black opacity-75">
            <div className="flex flex-col items-center mt-16 w-4/5">
                <h1 className=" flex justify-center text-3xl font-bold text-white mb-6">About</h1>
                <p className="flex justify-center text-2xl text-white">
                    I’m a web developer skilled in the MERN stack and Tailwind CSS,
                    specializing in building responsive, scalable, and user-friendly
                    applications. I focus on creating seamless experiences through
                    clean, efficient code and modern design.
                </p>
            </div>
            
        </section>
    )
}

export default About;
