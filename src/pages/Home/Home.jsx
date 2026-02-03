import SEO from '../../components/SEO';
import Hero from '../../components/Hero/Hero';
import Differentiator from '../../components/Differentiator/Differentiator';
import Applications from '../../components/Applications/Applications';
import Process from '../../components/Process/Process';
import Materials from '../../components/Materials/Materials';
import ClosingCTA from '../../components/ClosingCTA/ClosingCTA';

export default function Home() {
    return (
        <div className="relative z-10 text-white">
            <SEO
                title="RelieveGt - Impresión 3D de Gran Formato"
                description="Especialistas en impresión 3D de gran formato en Guatemala. Creamos piezas monumentales, esculturas artísticas, publicidad volumétrica y prototipos industriales con precisión milimétrica y presencia inigualable."
                name="RelieveGt"
                type="website"
            />

            <Hero />

            {/* 1. Gancho Visual: ¿Qué puedo hacer? */}
            <div className="section-below-fold">
                <Applications />
            </div>

            {/* 2. Autoridad y Razón: ¿Por qué RelieveGt? (Escala, Precisión) */}
            <div className="section-below-fold">
                <Differentiator />
            </div>

            {/* 3. Calidad Tangible: ¿De qué está hecho? */}
            <div className="section-below-fold">
                <Materials />
            </div>

            {/* 4. Confianza: ¿Cómo es el proceso? */}
            <div id="proceso" className="section-below-fold">
                <Process />
            </div>
        </div>
    );
}
