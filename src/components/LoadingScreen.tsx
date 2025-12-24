"use client";

import React, { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [loadingTextVisible, setLoadingTextVisible] = useState(false);
    const [mainIconVisible, setMainIconVisible] = useState(false);
    const [subIconsVisible, setSubIconsVisible] = useState([false, false, false]);
    const [designerTextVisible, setDesignerTextVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Sequence from main.js:
        // showElement(loadingText, 0);
        // showElement(mainIcon, 800);
        // showElement(subIcons..., 1600...);
        // showElement(designerText, 2800);
        // hide screen at 4000

        const t1 = setTimeout(() => setLoadingTextVisible(true), 0);
        const t2 = setTimeout(() => setMainIconVisible(true), 800);

        const t3 = setTimeout(() => {
            setSubIconsVisible(() => [true, false, false]);
        }, 1600);
        const t4 = setTimeout(() => {
            setSubIconsVisible(() => [true, true, false]);
        }, 2000);
        const t5 = setTimeout(() => {
            setSubIconsVisible(() => [true, true, true]);
        }, 2400);

        const t6 = setTimeout(() => setDesignerTextVisible(true), 2800);

        const t7 = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        const t8 = setTimeout(() => {
            onComplete();
        }, 4500); // Allow fade out

        return () => {
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
            clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); clearTimeout(t8);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            id="loading-screen"
            className={`fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center flex-col z-[9999] overflow-hidden text-[#00f0ff] text-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="loading-content">
                <div className={`mb-5 ${mainIconVisible ? 'animate-fall opacity-100' : 'opacity-0 translate-y-[-200px]'}`}>
                    <i className="fa-solid fa-laptop-code fa-5x main-icon"></i>
                </div>

                <h1 className={`text-4xl font-bold my-5 ${loadingTextVisible ? 'animate-fall opacity-100' : 'opacity-0 translate-y-[-200px]'}`} id="loading-text">MY PROFILE</h1>

                <div className="sub-icons flex justify-center gap-6 mb-5">
                    <i className={`fa-brands fa-github fa-2x ${subIconsVisible[0] ? 'animate-fall opacity-100' : 'opacity-0 translate-y-[-200px]'}`}></i>
                    <i className={`fa-solid fa-code fa-2x ${subIconsVisible[1] ? 'animate-fall opacity-100' : 'opacity-0 translate-y-[-200px]'}`}></i>
                    <i className={`fa-solid fa-user fa-2x ${subIconsVisible[2] ? 'animate-fall opacity-100' : 'opacity-0 translate-y-[-200px]'}`}></i>
                </div>

                <h2 className={`font-semibold text-xl my-5 ${designerTextVisible ? 'animate-fall opacity-100' : 'opacity-0 translate-y-[-200px]'}`} id="designer-text">Designed by Amine</h2>
            </div>
        </div>
    );
}
