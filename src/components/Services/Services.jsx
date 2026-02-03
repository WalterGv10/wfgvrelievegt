const services = [
    { title: 'Cabezones', icon: '🗿' },
    { title: 'Esculturas', icon: '🎨' },
    { title: 'Llaveros', icon: '🔑' },
    { title: 'Recuerdos Corporativos', icon: '🎁' },
    { title: 'Producción en Masa', icon: '⚙️' },
    { title: 'Prototipos Personalizados', icon: '🧩' }
];

function ServiceCard({ service, index }) {
    return (
        <div
            className="group relative p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {service.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-100 group-hover:text-cyan-200 transition-colors duration-300">
                {service.title}
            </h3>
        </div>
    );
}

export default function Services() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16">
            <div className="max-w-6xl w-full space-y-8 sm:space-y-12 md:space-y-16">
                {/* Section Header */}
                <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-blue-300">
                            De la Idea a la Realidad Física
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                        Especialistas en impresión 3D de grado industrial.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
