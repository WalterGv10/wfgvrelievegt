import SEO from '../../components/SEO';
import CatalogIntro from '../../components/CatalogIntro/CatalogIntro'; // We can reuse or create a specific one
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductSpotlight from '../../components/ProductSpotlight/ProductSpotlight';
import { products } from '../../data/products';
import { FaInstagram } from 'react-icons/fa';

export default function Funkos() {
    // Filter only Funkos
    const funkosProducts = products.filter(p => p.type === 'Funko' || p.name.includes('Funko') || p.name.includes('Caricatura'));

    // Highlight Data (Real User Images)
    const featuredFunkoImages = [
        { image: '/catalog/funkos-showcase/catalina.png', text: 'Catalina' },
        { image: '/catalog/funkos-showcase/magda.png', text: 'Dra. Magda' },
        { image: '/catalog/funkos-showcase/steven.png', text: 'Steven' },
        { image: '/catalog/funkos-showcase/hawk.png', text: 'Hawk' },
        { image: '/catalog/funkos-showcase/leo.png', text: 'Leo' },
        { image: '/catalog/funkos-showcase/solye.png', text: 'Solye' },
        { image: '/catalog/funkos-showcase/antonella.png', text: 'Antonella' },
        { image: '/catalog/funkos-showcase/west.png', text: 'West' },
        { image: '/catalog/funkos-showcase/cheche.png', text: 'Cheche' },
    ];

    return (
        <div className="relative z-10 text-amber-100 pt-16 sm:pt-20">
            <SEO
                title="Funkos & Coleccionables - RelieveGt"
                description="Personalización de funkitos en impresión 3D. Cada proyecto se construye a escala real. Hablemos de tu pieza."
                name="RelieveGt"
                type="website"
            />

            {/* Funkos Hero */}
            <section className="relative py-20 sm:py-32 px-6 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
                    Funkos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gt</span>
                </h1>

                <div className="space-y-4 mb-8">
                    <p className="text-xl sm:text-2xl text-white font-medium">
                        Personalización de funkitos en impresión 3D 🧚🏼‍♀️🪄
                    </p>
                    <div className="space-y-2">
                        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Cada proyecto se construye a escala real.<br />
                            <span className="text-white font-semibold block mt-1">Hablemos de tu pieza</span>
                        </p>
                        <p className="text-white/60 text-sm italic">
                            Envíanos tu imagen de referencia al DM para hacerte una propuesta.
                        </p>
                    </div>
                    <p className="text-amber-400 font-bold tracking-wider text-xl uppercase">
                        🚚 Envíos a toda Guate!
                    </p>
                </div>

                <a
                    href="https://www.instagram.com/funkosgt_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all backdrop-blur-md group"
                >
                    <FaInstagram className="text-xl group-hover:text-pink-400 transition-colors" />
                    <span className="font-medium tracking-wide">@funkosgt_</span>
                </a>
            </section>

            {/* Spotlight */}
            <div className="pb-20">
                <ProductSpotlight
                    title="Experiencia Custom Total"
                    description="No es solo una figura, es una experiencia. Desde el modelado 3D de tus rasgos hasta el diseño gráfico de tu caja personalizada."
                    images={featuredFunkoImages}
                    align="right"
                />
            </div>


            {/* Grid */}
            <section className="px-3 sm:px-6 md:px-8 pb-12 sm:pb-16 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
                        {funkosProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
