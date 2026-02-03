import { Link } from 'react-router-dom';
import TextType from '../TextType/TextType';

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[100dvh] w-full container-padding text-center">
            <div className="max-w-[90vw] w-full space-y-[var(--spacing-gap)]">

                {/* Tagline */}
                <div>
                    <p className="text-fluid-small tracking-[0.3em] uppercase text-amber-200/90 font-medium drop-shadow-md">
                        Impresión 3D de gran formato
                    </p>
                </div>

                {/* Main Headline */}
                <div className="min-h-[12rem] sm:min-h-[16rem] flex items-center justify-center">
                    <h1 className="text-fluid-hero font-light tracking-tight leading-[1.1] text-amber-100 drop-shadow-xl">
                        <TextType
                            text={[
                                "No imprimimos objetos.",
                                "Imprimimos presencia.",
                                "Imprimimos escala.",
                                "Imprimimos impacto."
                            ]}
                            typingSpeed={50}
                            deletingSpeed={30}
                            pauseDuration={2000}
                            cursorCharacter="_"
                            showCursor={true}
                            variableSpeed={{ min: 60, max: 120 }}
                            className="font-semibold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                        />
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="max-w-[60ch] mx-auto">
                    <p className="text-fluid-body text-amber-300 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                        Piezas monumentales. Precisión milimétrica. Presencia que transforma espacios. <span className="text-amber-200/80 italic text-[0.9em]">Pero también hacemos llaveros de bolsillo, al cliente lo que pida.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
