import React, { useState } from "react";
import TextBox from "../components/TextBox";
import { Link, useNavigate } from "react-router-dom";
import PButton from "../components/PButton";
import api from "../PHttp";

const Signup = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErr("");
        try {
            await api.post(`/auth/register`, formData);
            navigate(`/login`);
        } catch (error) {
            setErr(error.response?.data?.message || "Signup failed.");
        }
    }

    const onFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <section className="flex flex-col items-center min-h-screen justify-start bg-black opacity-75">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center border bg-black p-2 gap-2 mt-6">
                <h2
                    className="flex flex-row w-full justify-center text-white font-bold text-3xl">Signup</h2>

                <hr className="flex w-full justify-center" />

                {
                    err ? (<p className="flex w-full p-1 bg-red-600 text-white">{err}</p>) : <></>
                }

                <div className="flex w-full justify-center">
                    <TextBox
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        placeholder="Full Name"
                        changeListener={onFormChange}
                    />
                </div>

                <div className="flex w-full justify-center">
                    <TextBox
                        type="text"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        changeListener={onFormChange}
                    />
                </div>

                <TextBox
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    changeListener={onFormChange}
                />

                <TextBox
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    placeholder="Confirm Password"
                    changeListener={onFormChange}
                />

                <hr className="flex w-full justify-center" />

                <div className="flex w-full justify-center text-white">
                    <p>Have An Account? <Link to={`/login`} className="underline">Login</Link></p>
                </div>

                <div className="flex w-full justify-center">
                    <PButton
                        type='submit'
                        value="Signup" />
                </div>
            </form>
        </section>
    )
}

export default Signup;
