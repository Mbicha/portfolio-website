import React from "react";
import profile from "../assets/images/profile.png";

/**
 * PButton Component
 * 
 * A reusable button component with customizable text, background color, and an onClick event handler.
 * 
 * Props:
 * - onClick (function): Function to be called when the button is clicked. Accepts an optional parameter.
 * - value (string, default: "Button"): The text displayed inside the button.
 * - bgColor (string, default: "#1d4ed8"): Background color of the button.
 * - params (any, default: null): Optional parameter to pass to the onClick function.
 * 
 * Example Usage:
 * ```jsx
 * const handleClick = (message) => {
 *     alert(`Button clicked with message: ${message}`);
 * };
 * 
 * <PButton onClick={handleClick} value="Click Me" bgColor="#4caf50" params="Hello, World!" />
 * ```
 */
const PButton = ({ onClick, value="Button", bgColor="#1d4ed8", params=null }) => {
    
    return(
        <>
            <button
                onClick={() => onClick && onClick(params)}
                className="flex flex-row justify-center items-center rounded-md p-1 text-white min-w-fit"
                style={{ backgroundColor: bgColor }}>
                {value}
            </button>
        </>
    );
};

export default PButton;
