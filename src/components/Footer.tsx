import React from "react";

export default function Footer() {
    return (
        <footer className="footer bg-black text-white py-[40px] px-5 text-center overflow-x-hidden">
            <div className="footer-container max-w-[1200px] mx-auto">
                <h2 className="footer-logo font-montserrat text-3xl mb-5">Amine</h2>
                <ul className="footer-links list-none flex justify-center gap-6 mb-5 flex-wrap">
                    <li><a href="#home" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Home</a></li>
                    <li><a href="#about" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">About</a></li>
                    <li><a href="#project" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Projects</a></li>
                    <li><a href="#services" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Services</a></li>
                    <li><a href="#contact" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Contact</a></li>
                </ul>
                <div className="footer-social flex justify-center gap-4 mb-4">
                    <a href="https://github.com/Saboo24" target="_blank" aria-label="GitHub" className="text-white text-lg transition-colors duration-300 hover:text-[#474af0]"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" target="_blank" aria-label="LinkedIn" className="text-white text-lg transition-colors duration-300 hover:text-[#474af0]"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://wa.me/213554139526" target="_blank" aria-label="WhatsApp" className="text-white text-lg transition-colors duration-300 hover:text-[#474af0]"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
                <p className="footer-copy text-xs text-[#aaa]">&copy; 2025 Amine. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
