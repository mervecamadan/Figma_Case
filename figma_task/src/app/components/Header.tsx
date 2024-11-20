"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="p-4">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                { }
                <div className="flex items-center space-x-3 ml-14">
                    <img
                        src="/logo_travlog.png"
                        alt="Travlog Logo"
                        className="w-8 h-8"
                    />
                    <div className="text-gray-950 font-bold text-lg">Travlog</div>
                </div>

                { }
                <ul className="flex space-x-10 justify-center flex-grow text-xs">
                    {["Home", "Discover", "Special Deals", "Contact"].map((text, index) => (
                        <li key={index}>
                            <Link
                                href="/"
                                className={`${text === "Home" ? "text-gray-950" : "text-gray-500"
                                    } hover:text-gray-300 font-bold transition`}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                { }
                <ul className="flex space-x-10 mr-14 text-xs">
                    {["Log In", "Sign Up"].map((text, index) => (
                        <li key={index}>
                            <Link
                                href="/"
                                className={`${text === "Log In" ? "text-gray-950" : "text-white"
                                    } hover:text-gray-300 font-bold transition ${text === "Sign Up" ? "bg-[var(--mypurple)] text-white rounded-full px-4 py-2" : ""
                                    }`}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
