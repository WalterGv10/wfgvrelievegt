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

// Component to handle hash scrolling
const ScrollToHash = () => {
    const { hash } = useLocation();

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
    }, [hash]);

    return null;
};

function App() {
    return (
        <div className="relative w-full min-h-screen font-sans antialiased text-amber-100 overflow-x-hidden">
            <ScrollToHash />
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Waves
                    lineColor="#ffffff"
                    backgroundColor="rgba(36, 36, 36, 1)" // Matching home background
                    waveSpeedX={0.0125}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
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
