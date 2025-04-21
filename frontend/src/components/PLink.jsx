import React from "react";
import { Link } from "react-router-dom";

/**
 * PLink Component
 * 
 * A reusable link component for navigation within the application.
 * 
 * Props:
 * - url (string, default: "/projects"): The URL or path to navigate to.
 * - value (string, default: "Link"): The text displayed inside the link.
 * - bgColor (string, default: "#1d4ed8"): The background color of the link.
 * 
 * Example Usage:
 * ```jsx
 * <PLink url="/projects" value="View Projects" bgColor="#4caf50" />
 * ```
 */

const PLink = ({ url = "/projects", value = "Link", bgColor = "#1d4ed8" }) => {
    const isExternalUrl = url.startsWith("http");

    return isExternalUrl ? (
        <a
            href={url}
            className="flex flex-row justify-center rounded-md p-2 text-white min-w-fit"
            style={{ backgroundColor: bgColor }}
            // target="_blank"
            rel="noopener noreferrer"
        >
            {value}
        </a>
    ) : (
        <Link
            to={url}
            className="flex flex-row justify-center rounded-md p-2 text-white min-w-fit"
            style={{ backgroundColor: bgColor }}
        >
            {value}
        </Link>
    );
};

export default PLink;
