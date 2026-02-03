import SectionWrapper from '../shared/SectionWrapper';

const applications = [
    { title: 'Arte y Escultura', description: 'Obras monumentales para galerías y museos.', icon: '◆' },
    { title: 'Arquitectura', description: 'Elementos decorativos y maquetas a escala.', icon: '◇' },
    { title: 'Branding Físico', description: 'Logotipos volumétricos y exhibidores 3D.', icon: '○' },
    { title: 'Prototipos', description: 'Validación de diseño a escala real.', icon: '□' }
];

export default function Applications() {
    return (
        <SectionWrapper>
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-amber-300 tracking-tight drop-shadow-[0_4px_20px_rgba(251,191,36,0.2)]">
                        Aplicaciones
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-amber-200/90 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        Donde la escala marca la diferencia.
                    </p>
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md hover:bg-black/50 hover:border-amber-300/30 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <span className="block text-xl sm:text-2xl md:text-3xl text-amber-300 group-hover:text-amber-200 transition-colors duration-500 mb-2 sm:mb-3 drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                                {app.icon}
                            </span>

                            {/* Content */}
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                {app.title}
                            </h3>
                            <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed">
                                {app.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
