import React, { useState } from "react";
import TextBox from "../components/TextBox";
import { Link, useNavigate } from "react-router-dom";
import PButton from "../components/PButton";
import api from "../PHttp";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
      
        try {
          const response = await api.post(`/auth/login`, formData);
          
          // Store token & user ID in sessionStorage
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userId", response.data.id);
          
          // Redirect to admin page
          navigate("/admin");
        } catch (error) {
          setError(error.response?.data?.message || "Login failed.");
        } finally {
          setLoading(false);
        }
      };

    return (
        <section className="flex flex-col items-center min-h-screen justify-start bg-black opacity-75">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center border bg-black p-2 gap-2 mt-6 w-full max-w-md">
                <h2 className="flex flex-row w-full justify-center text-white font-bold text-3xl">
                    Login
                </h2>

                {error && (
                    <div className="w-full p-2 bg-red-500 text-white text-center rounded">
                        {error}
                    </div>
                )}

                <hr className="flex w-full justify-center" />

                <div className="flex w-full justify-center">
                    <TextBox
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        changeListener={onFormChange}
                        required
                    />
                </div>

                <div className="flex w-full justify-center">
                    <TextBox
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        changeListener={onFormChange}
                        required
                    />
                </div>

                <hr className="flex w-full justify-center" />

                <div className="flex w-full justify-center text-white">
                    <p>No Account? <Link to={`/signup`} className="underline">Signup</Link></p>
                </div>

                <div className="flex w-full justify-center">
                    <PButton
                        type="submit"
                        value={loading ? "Logging in..." : "Login"}
                        disabled={loading}
                    />
                </div>
            </form>
        </section>
    );
};

export default Login;
