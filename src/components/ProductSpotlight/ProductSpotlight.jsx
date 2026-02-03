import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircularGallery from '../CircularGallery/CircularGallery';

gsap.registerPlugin(ScrollTrigger);

export default function ProductSpotlight({ title, description, images, align = 'left' }) {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Animation disabled for debugging visibility
    }, [align]);

    // Fill images array if it has few items to create a better circular effect
    const filledImages = images.length < 8
        ? [...images, ...images, ...images, ...images, ...images].slice(0, 10)
        : images;

    return (
        <section ref={sectionRef} className="relative w-full py-16 bg-[#0a0a0a] border-b border-white/5 last:border-0 overflow-hidden">
            <div className="container-padding max-w-[1920px] mx-auto">

                {/* Header */}
                <div ref={contentRef} className={`text-center mb-8 ${align === 'right' ? 'md:text-right' : 'md:text-left'} md:px-12`}>
                    <h2 className="text-fluid-h2 font-light text-white tracking-tight drop-shadow-xl inline-block relative">
                        {title}
                        <span className={`block h-1 w-1/3 bg-amber-400/40 mt-2 ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}></span>
                    </h2>
                    <p className={`mt-4 text-fluid-body text-white/70 max-w-xl leading-relaxed ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}>
                        {description}
                    </p>
                </div>

                {/* Gallery - Optimized for mobile scroll */}
                <div className="h-[300px] sm:h-[400px] lg:h-[600px] w-full relative z-0 mt-8 rounded-2xl overflow-hidden border border-white/5 bg-black/20">
                    <CircularGallery
                        items={filledImages}
                        bend={2}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        font="bold 40px Inter"
                        scrollSpeed={2}
                    />

                    {/* Overlay Gradients */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

                    {/* Mobile Scroll Hint - Bottom */}
                    <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
                        <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                            <p className="text-[9px] text-white/60 uppercase tracking-wider">Desliza aquí para continuar ↓</p>
                        </div>
                    </div>
                </div>

                {/* Mobile Safe Scroll Zone */}
                <div className="md:hidden h-16 -mt-8 relative z-10 touch-pan-y" style={{ touchAction: 'pan-y' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                    </div>
                </div>

            </div>
        </section>
    );
}
