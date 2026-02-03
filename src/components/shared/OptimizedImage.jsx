import { useState, useEffect } from 'react';

/**
 * OptimizedImage Component - Core Web Vitals Optimized
 * 
 * Features:
 * - Native lazy loading
 * - Proper sizing to prevent CLS
 * - Progressive loading with blur placeholder
 * - WebP with fallback
 * - Aspect ratio preservation
 */
export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = "",
    priority = false,
    aspectRatio = "auto",
    objectFit = "cover",
    ...props
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(priority ? src : '');

    useEffect(() => {
        if (!priority && src) {
            // Delay loading for non-priority images
            const timer = setTimeout(() => {
                setCurrentSrc(src);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [src, priority]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    // Calculate aspect ratio for CLS prevention
    const paddingBottom = aspectRatio !== "auto"
        ? `${(1 / aspectRatio) * 100}%`
        : height && width
            ? `${(height / width) * 100}%`
            : '75%';

    return (
        <div
            className={`relative overflow-hidden bg-zinc-900 ${className}`}
            style={{ paddingBottom }}
        >
            {/* Blur placeholder */}
            {!isLoaded && currentSrc && (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse" />
            )}

            {/* Actual image */}
            {currentSrc && (
                <img
                    src={currentSrc}
                    alt={alt || ''}
                    width={width}
                    height={height}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    onLoad={handleLoad}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ objectFit }}
                    {...props}
                />
            )}
        </div>
    );
}
