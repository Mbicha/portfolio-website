import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import ProjectCard from "../components/ProjectCard";
import api from "../PHttp";

const Admin = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await api.get(`projects`);
                setProjects(response.data.data);                
            } catch (error) {
                // Handle errors
                console.error("Error fetching projects:", error);
                // You might want to set an error state here
            }
        };
    
        getProjects();
    
        // Add cleanup function if needed
        return () => {
            // Cancel ongoing requests if component unmounts
        };
    }, [projects]); // Add dependencies if needed

    return (
        <section className="flex sm:flex-row flex-col w-full min-h-screen bg-zinc-400">
            {/* Profile Section */}
            <div className="flex w-full p-1 sm:w-1/4 sm:p-4">
                <Profile />
            </div>

            {/* Projects Section */}
            <ProjectCard />
            {/* <div className="flex flex-col justify-start items-center w-full sm:3/4 mt-2 gap-2"> 
                <h1 className="flex w-full justify-center text-blue-700 text-3xl font-bold">Projects</h1>
                {projects.length > 0 ? (
                    projects.map(project => (
                        <ProjectCard  project={project} />
                    ))
                ) : (
                    <p>Oops! No Projects</p>
                )
                }
            </div> */}
        </section>
    )
}

export default Admin;
