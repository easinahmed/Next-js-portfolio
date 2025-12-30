

export default function Footer() {
    const year= new Date().getFullYear()
    return (
        <footer className="footer bg-black text-white py-10 px-5 text-center overflow-x-hidden">
            <div className="footer-container max-w-300 mx-auto">
                <h2 className="footer-logo font-montserrat text-3xl mb-5">E@sin</h2>
                <ul className="footer-links list-none flex justify-center gap-6 mb-5 flex-wrap">
                    <li><a href="#home" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Home</a></li>
                    <li><a href="#about" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">About</a></li>
                    <li><a href="#project" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Projects</a></li>
                    <li><a href="#services" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Services</a></li>
                    <li><a href="#contact" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#474af0]">Contact</a></li>
                </ul>
                <div className="footer-social flex justify-center gap-4 mb-4">
                    <a href="https://github.com/easinahmed" target="_blank" aria-label="GitHub" className="text-white text-lg transition-colors duration-300 hover:text-[#474af0]"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/md-easin-ahmed-4687bb21a/" target="_blank" aria-label="LinkedIn" className="text-white text-lg transition-colors duration-300 hover:text-[#474af0]"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://wa.link/2i7x3c" target="_blank" aria-label="WhatsApp" className="text-white text-lg transition-colors duration-300 hover:text-[#474af0]"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
                <p className="footer-copy text-xs text-[#aaa]">&copy; {year} E@sin. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
