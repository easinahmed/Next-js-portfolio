"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <div
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 bg-[#474af0] text-white w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-[1000] transition-transform duration-300 hover:scale-120 animate-bounce"
        >
            <i className="fa-solid fa-chevron-up"></i>
        </div>
    );
}
