import SectionWrapper from '../shared/SectionWrapper';

const steps = [
    {
        number: '01',
        title: 'Concepto',
        description: 'Evaluamos tu idea, sketch o archivo digital para determinar la viabilidad técnica y escala óptima.'
    },
    {
        number: '02',
        title: 'Ingeniería',
        description: 'Modelado 3D avanzado y "slicing" personalizado para garantizar integridad estructural en piezas monumentales.'
    },
    {
        number: '03',
        title: 'Producción',
        description: 'Impresión aditiva de alta precisión con materiales industriales de última generación (PLA+, PETG, Resina).'
    },
    {
        number: '04',
        title: 'Post-Proceso',
        description: 'Acabados profesionales, lijado, sellado y pintura especializada para resultados estéticos de galería.'
    }
];

export default function Process() {
    return (
        <SectionWrapper>
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-amber-300 tracking-tight drop-shadow-[0_4px_20px_rgba(251,191,36,0.2)]">
                        De idea a{' '}
                        <span className="font-bold">pieza monumental</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-amber-200/90 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                        Precisión, no velocidad.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Horizontal line (desktop) */}
                    <div className="hidden md:block absolute top-6 lg:top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                    {/* Steps */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative text-center space-y-2 sm:space-y-3"
                            >
                                {/* Number */}
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-amber-300/30 bg-black/50 backdrop-blur-md text-lg sm:text-xl lg:text-2xl font-light text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-amber-300 drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[11px] sm:text-xs md:text-sm text-amber-100/80 font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
