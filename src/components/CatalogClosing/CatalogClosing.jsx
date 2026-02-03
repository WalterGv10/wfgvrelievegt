import { Link } from 'react-router-dom';

export default function CatalogClosing() {
    return (
        <section className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">

                {/* Transversal Message */}
                <div className="py-6 sm:py-8 md:py-12 border-y border-amber-500/20">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-amber-200/90 font-light italic tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                        Tu próximo proyecto mecerá el mundo físico.
                    </p>
                </div>

                {/* Authority Statement */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-amber-300 leading-tight drop-shadow-[0_4px_20px_rgba(251,191,36,0.2)]">
                        Cada pieza es única.
                        <br />
                        <span className="font-bold">
                            Cada proyecto se construye a escala real.
                        </span>
                    </h2>
                </div>

                {/* CTA */}
                <div className="pt-3 sm:pt-4 md:pt-6 relative z-20">
                    <Link
                        to="/contacto"
                        className="inline-block px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3 sm:py-3.5 md:py-4 lg:py-5 border-2 border-amber-300 bg-black/40 backdrop-blur-md text-amber-300 font-bold tracking-wide rounded-full hover:bg-amber-300 hover:text-black transition-all duration-500 text-xs sm:text-sm md:text-base drop-shadow-[0_4px_20px_rgba(251,191,36,0.2)] relative z-30 hover:scale-105"
                    >
                        Hablemos de tu pieza
                    </Link>
                    <p className="mt-4 text-xs text-amber-100/60 font-medium tracking-wider uppercase">
                        Sin compromiso. Solo posibilidades.
                    </p>
                </div>

            </div>
        </section>
    );
}
