"use client";

import React, { useState, useEffect } from "react";


const navItems = [
    { name: "Home", href: "#home", icon: "fa-regular fa-house" },
    { name: "About", href: "#about", icon: "fa-regular fa-address-card" },
    { name: "Projects", href: "#project", icon: "fa-regular fa-folder-open" },
    { name: "Services", href: "#services", icon: "fa-solid fa-code" },
    { name: "Contact", href: "#contact", icon: "fa-regular fa-envelope" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1));

            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Offset for header height
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Header offset
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
            setActiveSection(targetId);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[1000] hidden md:block">
            <div className="flex items-center justify-center py-5">
                <nav>
                    <ul className="flex gap-12 bg-white shadow-md py-2.5 px-6 rounded-[25px]">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <li
                                    key={item.name}
                                    className={`flex items-center gap-1.5 rounded-[25px] transition-all duration-300 ${isActive ? "bg-black text-white px-4 py-2.5" : "text-black"
                                        }`}
                                >
                                    <i className={`${item.icon} ${isActive ? "text-white" : "text-black"}`}></i>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleClick(e, item.href)}
                                        className={`font-montserrat no-underline ${isActive ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
