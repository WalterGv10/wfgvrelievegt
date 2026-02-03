import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Funkos', path: '/funkos' },
    { name: 'Contacto', path: '/contacto' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${isScrolled
                ? 'bg-black/50 backdrop-blur-xl border-b border-amber-400/20'
                : 'bg-black/20 backdrop-blur-md'
                }`}
        >
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-2xl md:text-3xl font-bold text-amber-100 hover:text-white transition-colors"
                    >
                        RelieveGt
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => {
                                    if (location.pathname === link.path) {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-black bg-amber-100'
                                    : 'text-amber-100/80 hover:text-amber-100 hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/relievegt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 ml-2 text-amber-100/80 hover:text-amber-100 hover:bg-white/5 rounded-full transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>

                        {/* CTA Button */}
                        <a
                            href="https://wa.me/50236850866?text=Hola%20RelieveGt,%20me%20gustaría%20cotizar%20un%20proyecto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 px-7 py-3 text-sm font-bold text-black bg-amber-100 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                        >
                            Cotizar
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-3 text-amber-100 hover:text-white transition-colors z-[1000]"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-xl transition-all duration-500 z-[998] flex flex-col items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-3 text-white/60 hover:text-white"
                >
                    <span className="text-5xl">&times;</span>
                </button>

                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => {
                                setIsOpen(false); // Force close menu
                                if (location.pathname === link.path) {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className={`text-4xl md:text-5xl font-light transition-all duration-300 ${location.pathname === link.path
                                ? 'text-amber-100'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a
                        href="https://wa.me/50236850866?text=Hola%20RelieveGt,%20me%20gustaría%20cotizar%20un%20proyecto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 px-12 py-4 text-base font-bold text-black bg-amber-100 rounded-full hover:bg-white transition-all"
                    >
                        Cotizar Proyecto
                    </a>
                </div>
            </div>
        </nav>
    );
}
