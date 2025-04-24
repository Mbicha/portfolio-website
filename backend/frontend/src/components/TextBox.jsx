// import React from "react";

// /**
//  * TextBox Component
//  * 
//  * A reusable input field component for text-based inputs.
//  * 
//  * Props:
//  * - changeListener (function): Callback function to handle input changes.
//  * - type (string, default: "text"): The type of input (e.g., "text", "email", "password").
//  * - placeholder (string, default: "TextBox"): The placeholder text displayed when the input is empty.
//  * - name (string, default: "TextBox"): The name attribute of the input field.
//  * 
//  * Example Usage:
//  * ```jsx
//  * <TextBox
//  *     changeListener={(e) => console.log(e.target.value)}
//  *     type="text"
//  *     placeholder="Enter your name"
//  *     name="username"
//  * />
//  * ```
//  */
// const TextBox = ({
//     changeListener,
//     type = "text",
//     placeholder = "TextBox",
//     name = "TextBox",
// }) => {
//     return (
//         <input
//             type={type}
//             placeholder={placeholder}
//             name={name}
//             onChange={changeListener}
//             className="flex flex-col text text-black w-4/5 rounded-md p-1"
//         />
//     );
// };

// export default TextBox;

import React from "react";

/**
 * TextBox Component
 * 
 * A reusable, controlled input field component for text-based inputs.
 * 
 * Props:
 * - value (string): The current value of the input. Required for controlled input behavior.
 * - changeListener (function): Callback function to handle input changes (e.g., onChange).
 * - type (string, default: "text"): The type of input (e.g., "text", "email", "password").
 * - placeholder (string, default: "TextBox"): The placeholder text displayed when the input is empty.
 * - name (string, default: "TextBox"): The name attribute of the input field.
 * - required (boolean, default: false): Whether the input is required in a form.
 * 
 * Example Usage:
 * ```jsx
 * <TextBox
 *     value={formData.username}
 *     changeListener={(e) => setFormData({ ...formData, username: e.target.value })}
 *     type="text"
 *     placeholder="Enter your name"
 *     name="username"
 *     required
 * />
 * ```
 */
const TextBox = ({
    value = "",
    changeListener,
    type = "text",
    placeholder = "TextBox",
    name = "TextBox",
    required = false,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={changeListener}
            required={required}
            className="flex flex-col text text-black w-4/5 rounded-md p-1"
        />
    );
};

export default TextBox;

