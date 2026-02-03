import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaGlobe } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="relative z-10 bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Background Texture/Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

            <div className="container-padding max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16">

                {/* Brand Section */}
                <div className="md:col-span-2 space-y-6">
                    <Link to="/" className="text-fluid-h3 font-bold text-amber-300 tracking-tight drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                        RelieveGt
                    </Link>
                    <p className="text-fluid-body text-amber-100/60 max-w-md leading-relaxed">
                        No imprimimos objetos. Imprimimos presencia. Especialistas en piezas monumentales y publicidad volumétrica en Guatemala. Cada proyecto es una declaración de escala.
                    </p>
                    <div className="flex items-center gap-5 pt-4">
                        <a href="https://www.instagram.com/relievegt/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-amber-300 hover:text-amber-100 hover:bg-white/10 transition-all border border-amber-500/20">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://wa.me/50236850866" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-amber-300 hover:text-amber-100 hover:bg-white/10 transition-all border border-amber-500/20">
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-amber-300 font-bold uppercase tracking-widest text-xs drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">Explorar</h4>
                    <ul className="space-y-4">
                        <li><Link to="/catalogo" className="text-amber-100/60 hover:text-amber-200 transition-colors">Catálogo</Link></li>
                        <li><Link to="/funkos" className="text-amber-100/60 hover:text-amber-200 transition-colors">Funkos Gt</Link></li>
                        <li><Link to="/contacto" className="text-amber-100/60 hover:text-amber-200 transition-colors">Contacto</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-amber-300 font-bold uppercase tracking-widest text-xs drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">Contacto</h4>
                    <ul className="space-y-4 text-amber-100/60">
                        <li className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-amber-500/50">WhatsApp</span>
                            <a href="tel:50236850866" className="hover:text-amber-200 transition-colors font-medium">+502 3685 0866</a>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-amber-500/50">Email</span>
                            <a href="mailto:Cenamorado901@gmail.com" className="hover:text-amber-200 transition-colors font-medium">Cenamorado901@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container-padding max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                    &copy; {new Date().getFullYear()} RelieveGt. Impresión 3D Monumental.
                </p>
                <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
                    <span className="hover:text-white/40 cursor-pointer">Guatemala</span>
                    <span className="hover:text-white/40 cursor-pointer">Privacidad</span>
                </div>
            </div>

            {/* Developer Signature */}
            <div className="container-padding max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 group">
                        <span className="text-[10px] sm:text-[9px] text-white/30 uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium">
                            Crafted by
                        </span>
                        <a
                            href="https://walweb.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-sm sm:text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-100 transition-all duration-300"
                        >
                            WalWeb
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-amber-200 group-hover:w-full transition-all duration-300" />
                        </a>
                    </div>
                    <p className="text-[9px] sm:text-[8px] text-white/20 italic tracking-wide text-center px-4">
                        Premium Web Development & Digital Experiences
                    </p>
                </div>
            </div>
        </footer>
    );
}
