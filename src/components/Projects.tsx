import React from "react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    image: string;
    skills: string[];
    github: string;
    demo: string;
}

const projects: Project[] = [
    {
        title: "E-Commerce Website",
        description: "Modern online store with product filtering, cart, and payment system.",
        image: "/images/Cleveroad.jpg",
        skills: ["HTML", "CSS", "JavaScript"],
        github: "#",
        demo: "#",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio to showcase my design and coding projects.",
        image: "/images/Capture d'écran 2025-10-22 182207.png",
        skills: ["HTML", "CSS", "Bootstrap"],
        github: "#",
        demo: "#",
    },
    {
        title: "Weather App",
        description: "Responsive app showing real-time weather data using API integration.",
        image: "/images/Weather Forecast Dashboard.jpg",
        skills: ["HTML", "CSS", "API"],
        github: "#",
        demo: "#",
    },
    {
        title: "Blog Website",
        description: "Clean and simple blogging platform with markdown support.",
        image: "/images/WordPress dashboard design concept.jpg",
        skills: ["HTML", "Tailwind", "JavaScript"],
        github: "#",
        demo: "#",
    },
    {
        title: "Game Landing Page",
        description: "Landing page for a game with animations and parallax effects.",
        image: "/images/Game Dashboard Design.jpg",
        skills: ["HTML", "CSS", "GSAP"],
        github: "#",
        demo: "#",
    },
    {
        title: "Task Manager",
        description: "Task tracking web app with CRUD features and clean UI.",
        image: "/images/Task manager app.jpg",
        skills: ["HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section className="project my-[100px] mx-[20px] md:my-[160px] md:mx-[50px] lg:mx-[150px] xl:mx-[200px] flex flex-col items-center justify-center text-center" id="project">
            <p className="pb-5 text-[13px] text-[#323232] uppercase tracking-wider">Projects</p>
            <h1 className="font-open-sans pb-2.5 text-3xl md:text-4xl font-bold">Featured Work</h1>
            <hr className="w-[10%] border-gray-300 mb-5" />
            <div className="info-pro pt-5 pb-8 text-[#323232] text-sm leading-relaxed">
                <p className="pb-2.5">A showcase of my recent projects demonstrating expertise in full-stack</p>
                <p>development, modern frameworks, and creative problem-solving.</p>
            </div>
            <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] w-full mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="project-card bg-white p-5 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl text-left">
                        <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                            {/* Using layout fill or fixed aspect ratio would be better, but fitting existing structure */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-[#1e40af] mb-2 font-bold text-lg">{project.title}</h3>
                        <p className="text-[#555] text-sm mb-4">{project.description}</p>
                        <div className="skills mb-4 flex flex-wrap gap-1">
                            {project.skills.map((skill, i) => (
                                <span key={i} className="inline-block bg-[#e0e7ff] text-[#1e3a8a] text-xs px-2.5 py-1.5 rounded-md transition-colors duration-300 hover:bg-[#c7d2fe] cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="btns flex justify-center gap-2.5 mt-auto">
                            <a href={project.github} className="btn bg-[#1e40af] text-white no-underline py-2 px-3.5 rounded-[25px] text-sm transition-all duration-300 flex items-center gap-1.5 hover:bg-[#2563eb]">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href={project.demo} className="btn bg-[#1e40af] text-white no-underline py-2 px-3.5 rounded-[25px] text-sm transition-all duration-300 flex items-center gap-1.5 hover:bg-[#2563eb]">
                                <i className="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
