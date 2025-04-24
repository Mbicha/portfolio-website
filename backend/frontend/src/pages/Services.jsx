import React from "react";

const Services = () => {
    return(
        <section className="flex flex-col justify-start items-center min-h-screen w-full p-3">
            <section className="flex flex-col border w-4/5 p-2 bg-white">
                <h1 className="flex w-full justify-center text-blue-700 text-3xl font-bold">Services</h1>
                <hr className="flex justify-center bg-black mt-2 mb-2 w-full" />
                <div className="flex flex-col p-2 bg-slate-400 mb-3 rounded-md">
                    <h2 className="flex flex-row justify-center italic font-semibold p-2">Precast Concrete Construction</h2>
                    <p>
                        With a strong foundation in infrastructure development and hands-on experience in metro rail and municipal road projects, I offer comprehensive civil engineering services tailored to modern construction demands. My expertise includes precast concrete construction, where I gained practical exposure at Maharashtra Metro Rail Corp’s Deccan Casting Yard, observing the manufacturing of precast blocks and the operation of tunnel boring machines while adhering to strict health and safety protocols.
                    </p>
                </div>
                
                <div className="flex flex-col p-2 bg-slate-400 mb-3 rounded-md">
                    <h2 className="flex flex-row justify-center italic font-semibold p-2">Urban Road Construction and Rehabilitation</h2>
                    <p>
                        I specialize in urban road construction and rehabilitation, having worked with Infraking Consulting Engineers on the concretization of roads under the Pimpri Chinchwad Municipal Corporation. This involved direct involvement in both concrete and asphalt road construction, as well as traffic management during execution phases to ensure minimal public disruption.
                    </p>
                </div>
                <div className="flex flex-col p-2 bg-slate-400 mb-3 rounded-md">
                    <h2 className="flex flex-row justify-center italic font-semibold p-2">AutoCAD, Revit, STAAD.Pro, and OfficeSuite</h2>
                    <p>
                        I am proficient in AutoCAD, Revit, STAAD.Pro, and OfficeSuite, which I have utilized for various projects. My experience includes creating detailed structural designs and drawings, conducting structural analysis, and preparing comprehensive project documentation. I am committed to delivering high-quality work that meets industry standards and client expectations.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default Services;
