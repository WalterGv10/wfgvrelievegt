import { useState } from 'react';
import OptimizedImage from '../shared/OptimizedImage';

export default function ProductCard({ product }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div
            className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm hover:border-amber-400/30 transition-all duration-700 ease-out cursor-pointer shadow-2xl hover:shadow-amber-900/10"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            onClick={() => setShowInfo(!showInfo)}
        >
            {/* Image Layer */}
            <div className="absolute inset-0 overflow-hidden">
                {product.image ? (
                    <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        width={700}
                        height={933}
                        aspectRatio={3 / 4}
                        className="w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                        priority={false}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <span className="text-white/10 text-fluid-hero font-bold pointer-events-none">{product.id}</span>
                    </div>
                )}

                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                {/* Accent Light (Glassmorphism effect) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-amber-400/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Info Overlay (Finer detail) */}
            <div
                className={`absolute inset-0 bg-black/90 backdrop-blur-xl p-[var(--spacing-container)] flex flex-col justify-center items-center text-center transition-all duration-700 cubic-bezier(0.16,1,0.3,1) ${showInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
            >
                <div className="w-12 h-px bg-amber-400/50 mb-6 transform transition-transform duration-1000 delay-100 group-hover:scale-x-150" />

                <h3 className="text-fluid-h3 font-bold text-white mb-4 tracking-tight">
                    {product.name}
                </h3>

                <div className="space-y-3 text-fluid-body text-white/70">
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-amber-400/70 uppercase tracking-[0.2em] text-[9px] font-bold">Dimensiones</span>
                        <p className="font-light">{product.dimensions}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-amber-400/70 uppercase tracking-[0.2em] text-[9px] font-bold">Concepto</span>
                        <p className="font-light italic">{product.type}</p>
                    </div>
                </div>

                <div className="mt-8 px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/50 group-hover:border-amber-400/50 group-hover:text-amber-400 transition-colors duration-500">
                    Ver Detalle
                </div>
            </div>

            {/* Bottom Label (Floating feel) */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end transform transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                <div className="space-y-1">
                    <span className="block text-[10px] uppercase tracking-widest text-amber-400/60 font-bold">RelieveGt</span>
                    <p className="text-fluid-body font-medium text-white drop-shadow-md">
                        {product.name}
                    </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 text-xs">
                    +
                </div>
            </div>
        </div>
    );
}
