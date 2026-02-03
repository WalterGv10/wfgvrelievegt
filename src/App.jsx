import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Waves from './components/Waves/Waves';
// Vercel deployment trigger - v2
import './styles/theme.css';

// Lazy loading pages for better performance (Velocity Skill)
const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Funkos = lazy(() => import('./pages/Funkos/Funkos'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Loading fallback
const PageLoader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[100]">
        <div className="w-12 h-12 border-4 border-amber-100/20 border-t-amber-100 rounded-full animate-spin" />
    </div>
);

// Component to handle hash scrolling and scroll to top on page navigation
const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]);

    return null;
};

function App() {
    return (
        <div className="relative w-full min-h-screen font-sans antialiased text-amber-100 overflow-x-hidden">
            <ScrollToHash />
            <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
                {/* Modern Radial Gradient Overlay for depth */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 1) 0%, rgba(5, 5, 5, 1) 100%)'
                    }}
                />
                <Waves
                    lineColor="rgba(251, 191, 36, 0.15)"
                    glowColor="rgba(251, 191, 36, 0.3)"
                    glowBlur={20}
                    showHorizontalLines={true}
                    backgroundColor="transparent"
                    waveSpeedX={0.0125}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={20}
                    yGap={50}
                />
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.6)_100%)]" />

                {/* Subtle Noise Texture */}
                <div
                    className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <Navbar />

            <main className="relative z-10">
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalogo" element={<Catalog />} />
                        <Route path="/funkos" element={<Funkos />} />
                        <Route path="/contacto" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </main>
        </div>
    );
}

export default App;
