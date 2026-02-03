import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HighFidelityImage from '../shared/HighFidelityImage';

export default function CatalogIntro() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-bg", {
                scale: 1.1,
                duration: 2,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[85vh] flex items-end pb-6 sm:pb-12 md:pb-16 overflow-hidden">
            {/* Hero Image Background */}
            <div className="absolute inset-0 overflow-hidden">
                <HighFidelityImage
                    src="/catalog-hero.jpg"
                    alt="Escultura en espacio de exhibición"
                    className="w-full h-full object-cover hero-bg"
                    fetchpriority="high"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-left space-y-2 sm:space-y-4 md:space-y-6">

                    {/* Tagline */}
                    <p className="reveal-text text-[9px] sm:text-xs md:text-sm text-amber-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold drop-shadow-lg">
                        Galería técnica
                    </p>

                    {/* Main Title */}
                    <h1 className="reveal-text text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-tight drop-shadow-2xl">
                        <span className="font-semibold italic">Piezas</span> que ocupan espacio.
                        <br />
                        <span className="text-white/80">Y lo merecen.</span>
                    </h1>

                    {/* Description */}
                    <p className="reveal-text text-xs sm:text-base md:text-lg lg:text-xl text-white/90 font-normal max-w-2xl leading-relaxed drop-shadow-xl border-l-2 border-amber-400/30 pl-6">
                        Cada proyecto es una declaración de escala construida con precisión milimétrica.
                    </p>

                </div>
            </div>
        </section>
    );
}
