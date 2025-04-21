import React, { useState, useEffect } from "react";
import PLink from "./PLink";
import PButton from "./PButton";
import api from "../PHttp";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [projectData, setProjectData] = useState({});
    const [err, setErr] = useState("");
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const isUserAdmin = () => {
            if (token) {
                setIsAdmin(true);
            }
        }

        isUserAdmin();
    }, [token])

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await api.get(`projects`);
                setProjects(response.data.data);
            } catch (error) {
                // Handle errors
                console.error("Error fetching projects:", error);
            }
        };

        getProjects();

        return () => {
        };
    }, [projects]); // Add dependencies if needed


    const handleUpdateProject = async (id) => {
        try {
            const response = await api.patch(`/projects/${id}`);
            setProjectData(response.data.data);
            navigate(`/edit-project/${id}`);
            setErr("");
        } catch (error) {
            setErr(error.message);

        }
    };

    const handleDeleteProject = async (id) => {
        try {
            await api.delete(`/projects/${id}`);
            setErr("");
        } catch (error) {
            setErr(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start mt-2 sm:w-3/5 lg:w-ful p-1">
            <h1 className="flex w-full justify-center text-blue-700 text-3xl font-bold">Projects</h1>
            <hr className="flex justify-center bg-black mt-2 mb-2 w-4/5" />

            {projects.length > 0 ? (
                projects.map(project => (
                    <div key={project._id} className="flex flex-col bg-white w-4/5 min-h-28 p-2 mb-2">
                        <h2 className="flex justify-center w-full text-2xl font-medium italic">{project.title}</h2>
                        <p className="flex justify-start w-full">{project.description}</p>

                        <div className="border m-2 p-1">
                            <span className="font-semibold">Tech:</span>

                            {err ? (
                                <p className="w-full p-1 bg-red-600 text-white mt-1">{err}</p>
                            ) : (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {project.tech_stack?.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="bg-slate-300 rounded px-2 py-1 whitespace-nowrap"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex w-full justify-end gap-2">
                            {isAdmin ? (
                                <>
                                    <PLink
                                        url="/projects"
                                        value="Visit"
                                    />
                                    <PButton
                                        onClick={handleUpdateProject}
                                        value="Update"
                                        params={project._id}
                                    />
                                    <PButton
                                        onClick={handleDeleteProject}
                                        value="Delete"
                                        params={project._id}
                                        bgColor="#dc2626"
                                    />
                                </>
                            ) : (
                                <PLink
                                    url={project.url}
                                    value="Visit"
                                    onError={() => alert("This project is currently unavailable.")}
                                />
                            )}
                        </div>
                    </div>

                ))
            ) : (
                <p>Oops! No Projects</p>
            )
            }
        </div>

    );
};

export default ProjectCard;
