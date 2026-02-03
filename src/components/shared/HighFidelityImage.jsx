import { useState, useEffect } from 'react';

export default function HighFidelityImage({ src, alt, className = "", ...props }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showShimmer, setShowShimmer] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsLoaded(true);
            setTimeout(() => setShowShimmer(false), 500);
        };
    }, [src]);

    return (
        <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden group/img">
            {/* Shimmer / Skeleton State */}
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                    {/* HD Loading Indicator */}
                    <div className="z-10 flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-2 border-amber-400/20 border-t-amber-400 rounded-full animate-spin" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 font-bold animate-pulse">
                            Loading Ultra-HD
                        </span>
                    </div>
                </div>
            )}

            {/* The actual image */}
            <img
                src={src}
                alt={alt}
                className={`${className} transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'
                    }`}
                {...props}
            />

            {/* Quality Tag (Corner) */}
            {isLoaded && (
                <div className="absolute bottom-4 right-4 z-10">
                    <div className="px-2 py-1 bg-black/40 backdrop-blur-md rounded border border-white/10 text-[8px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                        HD High Fidelity
                    </div>
                </div>
            )}
        </div>
    );
}
