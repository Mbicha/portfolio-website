import React, {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard";
import api from "../PHttp";

const Projects = () => {
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
    }, []); // Add dependencies if needed
    
    return (
        <section className="flex flex-row justify-center min-h-screen bg-black opacity-75 p-3">
            <ProjectCard />            
        </section>
    )
}


export default Projects;
