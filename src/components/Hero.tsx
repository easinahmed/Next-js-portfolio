"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const words = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast", "React Developer"];
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="home my-[100px] mx-[20px] md:my-[160px] md:mx-[50px] lg:mx-[150px] xl:mx-[200px]" id="home">
            <p className="home-p text-black bg-[rgba(128,128,128,0.214)] inline-block rounded-[25px] px-2.5 py-1.5 mb-[30px]">
                <span className="home-s font-bold text-green-700">. </span>Available for freelance work
            </p>
            <div className="home-container flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start text-center md:text-left">
                <div className="home-section flex-1">
                    <div className="info-home">
                        <h1 className="text-[40px] md:text-[70px] font-raleway mb-5 font-bold leading-tight">
                            Hi, I&apos;m Easin
                        </h1>
                        <h3 className="text-[28px] md:text-[40px] font-playfair mb-5 min-h-[50px]">
                            {text}
                            <span className="cursor">|</span>
                        </h3>
                        <div className="info-p text-[#222] font-roboto pb-5 text-sm md:text-base">
                            <p className="pb-1.5">I create beautiful, functional, and user-centered digital experiences.</p>
                            <p className="pb-1.5">With 1+ years of experience in Web Development, I bring ideas to life</p>
                            <p>through clean code and thoughtful design.</p>
                        </div>
                        <div className="info-p2 flex gap-4 text-[#2c2c2c] text-sm pb-5 justify-center md:justify-start">
                            <p><i className="fa-solid fa-location-dot"></i> Based in Algeria</p>
                            <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
                        </div>
                        <div className="btnn flex gap-4 pb-[30px] justify-center md:justify-start">
                            <button className="bg-black text-white border-none rounded-[10px] px-4 py-2.5 cursor-pointer hover:bg-gray-800 transition">
                                <i className="fa-solid fa-arrow-right mr-2"></i> Hire Me
                            </button>
                            <button className="bg-transparent border-2 border-black rounded-[10px] px-4 py-2.5 cursor-pointer transition duration-400 hover:bg-black hover:text-white">
                                <i className="fa-solid fa-download mr-2"></i> Download CV
                            </button>
                        </div>
                        <div className="hhr pb-[30px]">
                            <hr className="w-[90%] font-bold text-gray-500 mx-auto md:mx-0" />
                        </div>
                        <div className="follow flex gap-4 items-center justify-center md:justify-start">
                            <p className="followw font-medium">Follow me:</p>
                            <ul className="flex gap-8 text-[20px] list-none">
                                <li><a href="#" className="text-black hover:text-blue-600 transition"><i className="fa-brands fa-github"></i></a></li>
                                <li><a href="#" className="text-black hover:text-blue-600 transition"><i className="fa-brands fa-discord"></i></a></li>
                                <li><a href="#" className="text-black hover:text-blue-600 transition"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="#" className="text-black hover:text-blue-600 transition"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-[400px]">
                    {/* Using Image component needs width/height or fill. The image is local. */}
                    <Image
                        src="/images/img2.jpg"
                        alt="Amine Profile"
                        width={400}
                        height={400}
                        className="rounded-[10px] w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
