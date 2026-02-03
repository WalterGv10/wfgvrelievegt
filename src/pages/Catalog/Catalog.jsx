import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../../components/SEO';
import CatalogIntro from '../../components/CatalogIntro/CatalogIntro';
import ProductCard from '../../components/ProductCard/ProductCard';
import CatalogClosing from '../../components/CatalogClosing/CatalogClosing';
import ProductSpotlight from '../../components/ProductSpotlight/ProductSpotlight';
import { products } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Catalog() {
    const gridRef = useRef(null);

    useEffect(() => {
        // Animation temporarily disabled for debugging visibility
    }, []);

    // Bad Bunny Data
    const badBunnyImages = [
        { image: '/catalog/bad-bunny/front.jpg', text: 'Benito' },
        { image: '/catalog/bad-bunny/studio.jpg', text: 'Vibra' },
        { image: '/catalog/bad-bunny/side.jpg', text: 'Perfil' },
        { image: '/catalog/bad-bunny/studio-2.jpg', text: 'Neon' },
    ];

    // Floating Bodies Data
    const bodiesImages = [
        { image: '/catalog/floating-bodies/main.jpg', text: 'Sinergia' },
        { image: '/catalog/floating-bodies/main.jpg', text: 'Equilibrio' },
        { image: '/catalog/floating-bodies/main.jpg', text: 'Fuerza' },
    ];

    // Geo Jaguar Pink Data (New)
    const jaguarPinkImages = [
        { image: '/catalog/geo-leopard-pink/main.jpg', text: 'Neon' },
        { image: '/catalog/geo-leopard-pink/main.jpg', text: 'Soul' },
        { image: '/catalog/geo-leopard-pink/main.jpg', text: 'Wild' },
    ];

    // Geo Panther Silver Data
    const pantherSilverImages = [
        { image: '/catalog/geo-panther-silver/main.jpg', text: 'Prism' },
        { image: '/catalog/geo-panther-silver/main.jpg', text: 'Cromo' },
        { image: '/catalog/geo-panther-silver/main.jpg', text: 'Luz' },
    ];

    // Lucky Cat Data
    const luckyCatImages = [
        { image: '/catalog/lucky-cat/main.jpg', text: 'Suerte' },
        { image: '/catalog/lucky-cat/main.jpg', text: 'Dark' },
        { image: '/catalog/lucky-cat/main.jpg', text: 'Neko' },
    ];

    // Mega Influencer Data
    const influencerImages = [
        { image: '/catalog/mega-caricatura-influencer/front.jpg', text: 'Vibra' },
        { image: '/catalog/mega-caricatura-influencer/side.jpg', text: 'Perfil' },
        { image: '/catalog/mega-caricatura-influencer/action.jpg', text: 'Gente' },
        { image: '/catalog/mega-caricatura-influencer/close.jpg', text: 'Detalle' },
    ];

    // Cyber Fox Data
    const foxImages = [
        { image: '/catalog/cyber-fox-mask/front.jpg', text: 'Neon' },
        { image: '/catalog/cyber-fox-mask/side.jpg', text: 'Prism' },
        { image: '/catalog/cyber-fox-mask/angle.jpg', text: 'Cyber' },
    ];

    return (
        <div className="relative z-10 text-amber-100 pt-16 sm:pt-20">
            <SEO
                title="Catálogo de Artistas y Personajes - RelieveGt"
                description="Explora nuestra colección de cabezones y esculturas 3D de gran formato: Bad Bunny, Karol G, Daddy Yankee, personajes de cine y más. Piezas únicas impresas en alta resolución."
                name="RelieveGt"
                type="website"
            />

            <CatalogIntro />

            {/* Spotlights Stack */}
            <div className="flex flex-col gap-12 sm:gap-24 pb-20">

                <ProductSpotlight
                    title="Cyber Fox Mask - LED Edition"
                    description="Arte digital que puedes usar. Facetas que reflejan la realidad y luces LED que definen el futuro. Una pieza icónica para escenarios y colecciones exclusivas."
                    images={foxImages}
                    align="left"
                />

                <ProductSpotlight
                    title="Mega-Caricatura: Edición Influencer"
                    description="Personalidad llevada al extremo monumental. Acabados premium que capturan cada gesto y accesorio icónico con fidelidad absoluta."
                    images={influencerImages}
                    align="right"
                />

                <ProductSpotlight
                    title="Cabezón Temático - Bad Bunny"
                    description="La pieza central. Iconografía urbana y texturas hiper-realistas llevadas al volumen monumental."
                    images={badBunnyImages}
                    align="left"
                />

                <ProductSpotlight
                    title="Sinergia Corporal"
                    description="Una composición desafiante a la gravedad. Cuerpos entrelazados en un arco de tensión estética."
                    images={bodiesImages}
                    align="left"
                />

                <ProductSpotlight
                    title="Jaguar Digital - Neon Soul"
                    description="Fusión cyberpunk. Facetas doradas y luz magenta interna para una presencia imponente."
                    images={jaguarPinkImages}
                    align="right"
                />

                <ProductSpotlight
                    title="Pantera Geométrica - Prism"
                    description="Agresividad natural domada por geometría digital. Facetas reflectantes y acentos neón."
                    images={pantherSilverImages}
                    align="left"
                />

                <ProductSpotlight
                    title="Maneki Neko - Dark Matter"
                    description="El gato de la suerte reimaginado. Estética oscura para espacios que rompen reglas."
                    images={luckyCatImages}
                    align="right"
                />

            </div>

            {/* Full Grid Header */}
            <div className="text-center py-12 border-t border-white/10 bg-black/50">
                <h3 className="text-fluid-h2 font-medium">Índice Completo</h3>
                <p className="text-white/60 mt-2">Explora todas nuestras referencias</p>
            </div>

            {/* Grid */}
            <section ref={gridRef} className="px-3 sm:px-6 md:px-8 pb-12 sm:pb-16 bg-black/50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
                        {products
                            .filter(product => {
                                // Exclude spotlight items (already shown above)
                                const spotlightIds = [31, 30, 7, 8, 12, 9, 11];
                                // Only show catalog items (up to ID 28)
                                return !spotlightIds.includes(product.id) && product.id <= 28;
                            })
                            .map((product) => (
                                <div key={product.id} className="product-card-anim">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <CatalogClosing />
        </div>
    );
}
