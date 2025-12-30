import React from "react";
import Image from "next/image";

const services = [
    {
        title: "Frontend Development",
        icon: "/images/web.svg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo.",
    },
    {
        title: "Backend and Database",
        icon: "/images/app.svg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo.",
    },
    {
        title: "Digital Marketing",
        icon: "/images/dm.svg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo.",
    },
    {
        title: "UI/UX Design",
        icon: "/images/seo.svg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo.",
    },
];

export default function Services() {
    return (
        <section className="services my-25 mx-5 md:my-40 md:mx-12.5 lg:mx-37.5 xl:mx-50 flex flex-col items-center justify-center text-center" id="services">
            <p className="pb-5 text-[13px] text-[#323232] uppercase tracking-wider">Services</p>
            <h1 className="font-open-sans pb-2.5 text-3xl md:text-4xl font-bold">Our Features & Services</h1>
            <hr className="w-[10%] border-gray-300 mb-8" />
            <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-275 w-full mx-auto pt-7.5">
                {services.map((service, index) => (
                    <div key={index} className="service-card bg-white p-6 rounded-2xl shadow-md transition-all duration-500 text-center relative overflow-hidden group hover:shadow-xl">
                        {/* Hover overlay effect */}
                        <div className="absolute top-0 -left-full w-full h-full bg-[#474af0] z-0 transition-all duration-500 group-hover:left-0"></div>

                        <div className="z-10 relative">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={100}
                                height={100}
                                className="mb-4 mx-auto w-25 h-25"
                            />
                            <h3 className="text-[#1e40af] mb-2.5 text-lg font-bold transition-colors duration-500 group-hover:text-white">
                                {service.title}
                            </h3>
                            <p className="text-[#555] text-sm transition-colors duration-500 group-hover:text-white">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
