import React, { useEffect, useState } from "react";
import TextBox from "../components/TextBox";
import PButton from "../components/PButton";
import { useParams, useNavigate } from "react-router-dom";
import api from "../PHttp";

const EditProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tech_stack: "",
    });

    // Get userId correctly from sessionStorage
    const userId = sessionStorage.getItem("userId");
    
    useEffect(() => {
        const fetchProject = async () => {
            if (!id) {
                setIsLoading(false);
                return;
            }

            try {
                const response = await api.get(`/projects/${id}`);
                const project = response.data.data;
                
                setFormData({
                    title: project.title,
                    description: project.description,
                    tech_stack: project.tech_stack?.join(", "),
                });
            } catch (error) {
                setErr("Failed to load project");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    const onFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!userId) {
            setErr("User not authenticated");
            return;
        }

        try {
            const payload = {
                ...formData,
                user_id: userId, // Include userId in payload
                tech_stack: formData.tech_stack.split(",")
                    .map(tech => tech.trim())
                    .filter(tech => tech.length > 0) // Filter out empty strings
            };

            if (id) {
                await api.patch(`/projects/${id}`, payload);
            } else {
                await api.post("/projects", payload);
            }
            
            navigate("/admin");
        } catch (error) {
            setErr(error.response?.data?.message || "Failed to save project");
        }
    };

    if (isLoading) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <section className="flex flex-col items-center min-h-screen justify-start bg-black opacity-75">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center border bg-black p-2 gap-2 mt-6 w-full max-w-md">
                <h2 className="flex flex-row w-full justify-center text-white font-bold text-3xl">
                    {id ? "Edit Project" : "Create Project"}
                </h2>

                {err && (
                    <div className="w-full p-2 bg-red-600 text-white text-center rounded">
                        {err}
                    </div>
                )}

                <hr className="flex w-full justify-center" />

                <div className="flex w-full justify-center">
                    <TextBox
                        type="text"
                        name="title"
                        value={formData.title}
                        placeholder="Project Title"
                        changeListener={onFormChange}
                        required
                    />
                </div>

                <div className="flex w-full justify-center">
                    <TextBox
                        type="text"
                        name="description"
                        value={formData.description}
                        placeholder="Description..."
                        changeListener={onFormChange}
                        required
                    />
                </div>

                <div className="flex w-full justify-center">
                    <TextBox
                        type="text"
                        name="tech_stack"
                        value={formData.tech_stack}
                        placeholder="Tech Stack e.g HTML, CSS, ReactJS"
                        changeListener={onFormChange}
                    />
                </div>

                <hr className="flex w-full justify-center" />

                <div className="flex w-full justify-center">
                    <PButton
                        type="submit"
                        value={id ? "Update Project" : "Create Project"}
                    />
                </div>
            </form>
        </section>
    );
};

export default EditProject;
