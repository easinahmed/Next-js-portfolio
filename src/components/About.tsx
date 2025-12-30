import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section className="about my-25 mx-5 md:my-40 md:mx-12.5 lg:mx-37.5 xl:mx-50" id="about">
            <p className="text-[13px] text-gray-700 pb-7.5 uppercase tracking-wider">About Me</p>
            <div className="title pb-5">
                <h1 className="font-open-sans text-3xl md:text-4xl font-bold">Building Meaningful</h1>
                <h1 className="font-open-sans text-3xl md:text-4xl font-bold">Digital Experiences</h1>
            </div>
            <div className="hrrr w-[30%] pb-10">
                <hr className="border-gray-300" />
            </div>
            <div className="about-container flex flex-col md:flex-row gap-8 items-center">
                <div className="info-about flex flex-col flex-1">
                    <div className="about-info mb-8 text-[#323232] text-[13px] md:text-sm leading-relaxed">
                        <p className="pb-7.5">
                            I&apos;m a creative front-end developer passionate about building modern and responsive web experiences.
                            <br />
                            My journey began with a love for design and evolved into a deep curiosity for how the web works — combining
                            logic with creativity to bring ideas to life.
                        </p>
                        <p>
                            When I&apos;m not coding, I enjoy learning new technologies, improving my projects,
                            <br />
                            and exploring better ways to make the web faster and more engaging.
                            <br />I believe in continuous learning, attention to detail, and the power of clean, meaningful design
                        </p>
                    </div>
                    <h2 className="pb-7.5 text-xl font-semibold">What Drives Me</h2>
                    <div className="card flex gap-4 md:gap-8 flex-wrap">
                        <div className="c1 flex flex-col items-center justify-center text-center border-2 border-black px-5 py-4 rounded-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-[#ff3333] hover:bg-[#fff5f5] hover:shadow-lg cursor-pointer flex-1 min-w-30">
                            <h3 className="pt-2.5 pb-2.5 font-bold"><i className="fa-solid fa-code mb-2 block text-2xl"></i> Languages</h3>
                            <p className="text-sm">HTML, CSS, JS, TS, React, Next</p>
                        </div>
                        <div className="c1 flex flex-col items-center justify-center text-center border-2 border-black px-5 py-4 rounded-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-[#ff3333] hover:bg-[#fff5f5] hover:shadow-lg cursor-pointer flex-1 min-w-30">
                            <h3 className="pt-2.5 pb-2.5 font-bold"><i className="fa-solid fa-graduation-cap mb-2 block text-2xl"></i> Certificate</h3>
                            <p className="text-sm">Diploma in Full Stack Web Development</p>
                        </div>
                        <div className="c1 flex flex-col items-center justify-center text-center border-2 border-black px-5 py-4 rounded-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-[#ff3333] hover:bg-[#fff5f5] hover:shadow-lg cursor-pointer flex-1 min-w-30">
                            <h3 className="pt-2.5 pb-2.5 font-bold"><i className="fa-solid fa-folder-open mb-2 block text-2xl"></i> Projects</h3>
                            <p className="text-sm">Built more than 5 projects</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-100 mt-8 md:mt-0 relative">
                    <Image
                        src="/images/img.jpg"
                        alt="About Image"
                        width={400}
                        height={400}
                        className="rounded-[15px] border border-black w-full h-auto object-cover md:relative md:-bottom-21.25"
                    />
                </div>
            </div>
        </section>
    );
}
