"use client";

import React, { FormEvent } from "react";

export default function Contact() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Logic for form submission would go here (e.g. API call)
        alert("Message sent! (Demo)");
    };

    return (
        <section className="contact my-[100px] mx-[20px] md:my-[160px] md:mx-[50px] lg:mx-[150px] xl:mx-[200px] flex flex-col items-center justify-center text-center" id="contact">
            <p className="pb-5 text-[13px] text-[#323232] uppercase tracking-wider">Contact</p>
            <h1 className="font-open-sans pb-2.5 text-3xl md:text-4xl font-bold">Get in Touch with Us</h1>
            <div className="contact-content pt-[50px] flex flex-wrap justify-center gap-[50px] w-full max-w-[1100px] text-left">
                <div className="contact-info flex-1 min-w-[300px]">
                    <p className="text-base mb-[25px]">
                        I&apos;m always open to discuss exciting projects and new opportunities. Let&apos;s collaborate!
                    </p>
                    <div className="contact-details flex flex-col gap-[15px] mb-[20px]">
                        <div className="contact-item flex items-center gap-3 text-[15px] text-[#222]">
                            <i className="fa-solid fa-envelope text-xl text-[#474af0]"></i>
                            <span>amine@example.com</span>
                        </div>
                        <div className="contact-item flex items-center gap-3 text-[15px] text-[#222]">
                            <i className="fa-solid fa-phone text-xl text-[#474af0]"></i>
                            <span>+213 00 11 22 33 44</span>
                        </div>
                        <div className="contact-item flex items-center gap-3 text-[15px] text-[#222]">
                            <i className="fa-solid fa-location-dot text-xl text-[#474af0]"></i>
                            <span>Algeria, Boumerdes</span>
                        </div>
                    </div>

                    <div className="social-links flex gap-[15px]">
                        <a href="https://github.com/Saboo24" className="social-link w-[50px] h-[50px] bg-[#f0f0f0] rounded-full flex items-center justify-center text-[#222] text-xl transition-all duration-300 hover:-translate-y-1.5 hover:text-white hover:bg-black" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" className="social-link w-[50px] h-[50px] bg-[#f0f0f0] rounded-full flex items-center justify-center text-[#222] text-xl transition-all duration-300 hover:-translate-y-1.5 hover:text-white hover:bg-[#0A66C2]" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/213554139526" className="social-link w-[50px] h-[50px] bg-[#f0f0f0] rounded-full flex items-center justify-center text-[#222] text-xl transition-all duration-300 hover:-translate-y-1.5 hover:text-white hover:bg-[#25D366]" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-form flex-1 min-w-[300px]">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group mb-[20px]">
                            <input type="text" placeholder="Your Name" required name="user_name" className="w-full p-3 border border-[#ccc] rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:border-[#474af0]" />
                        </div>
                        <div className="form-group mb-[20px]">
                            <input type="email" placeholder="Your Email" required name="user_email" className="w-full p-3 border border-[#ccc] rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:border-[#474af0]" />
                        </div>
                        <div className="form-group mb-[20px]">
                            <textarea name="message" placeholder="Your Message" rows={5} required className="w-full p-3 border border-[#ccc] rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:border-[#474af0]"></textarea>
                        </div>
                        <button type="submit" className="btn-send bg-[#474af0] text-white border-none py-3 px-6 rounded-lg cursor-pointer text-base transition-colors duration-300 hover:bg-[#2c36d9]">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
