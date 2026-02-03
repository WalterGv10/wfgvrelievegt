import { Link } from 'react-router-dom';
import SectionWrapper from '../shared/SectionWrapper';

export default function ClosingCTA() {
    return (
        <SectionWrapper className="flex items-center">
            <div className="w-full text-center space-y-6 sm:space-y-8 md:space-y-10">
                {/* Authority Statement */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <p className="text-[10px] sm:text-xs md:text-sm text-white/70 tracking-widest uppercase font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        Cada proyecto se construye a escala real.
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        Tu próximo proyecto{' '}
                        <span className="font-semibold text-amber-100">
                            mecerá el mundo físico.
                        </span>
                    </h2>
                </div>

                <div className="pt-2 sm:pt-4 relative z-20">
                    <Link
                        to="/contacto"
                        className="inline-block px-8 sm:px-10 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 border-2 border-amber-100/40 bg-black/40 backdrop-blur-md text-amber-100 font-medium tracking-wide rounded-full hover:bg-amber-100 hover:text-black transition-all duration-500 text-sm sm:text-base drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative z-30"
                    >
                        Hablemos de tu pieza
                    </Link>
                </div>

                {/* Subtle tagline */}
                <p className="text-[10px] sm:text-xs md:text-sm text-white/70 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    Sin compromiso. Solo posibilidades.
                </p>
            </div>
        </SectionWrapper>
    );
}
