import React from "react";

const Services = () => {
    return(
        <section className="flex flex-col justify-start items-center min-h-screen w-full p-3">
            <section className="flex flex-col border w-4/5 p-2 bg-white">
                <h1 className="flex w-full justify-center text-blue-700 text-3xl font-bold">Projects</h1>
                <hr className="flex justify-center bg-black mt-2 mb-2 w-full" />
                <div className="flex flex-col p-2 bg-slate-400 mb-3 rounded-md">
                    <h2 className="flex flex-row justify-center italic font-semibold p-2">Web Design</h2>
                    <p>I offer custom web design services tailored to your needs, combining creativity and functionality to deliver visually stunning and user-friendly websites. From concept to launch, I ensure a seamless and engaging digital experience.</p>
                </div>
                <div className="flex flex-col p-2 bg-slate-400 rounded-md">
                    <h2 className="flex flex-row justify-center italic font-semibold p-2">Web Development</h2>
                    <p>I provide end-to-end web development solutions, leveraging the MERN stack to build robust, scalable, and high-performance web applications. From backend APIs to dynamic frontend interfaces, I deliver tailored solutions to meet your business goals.</p>
                </div>
            </section>
        </section>
    )
}

export default Services;
