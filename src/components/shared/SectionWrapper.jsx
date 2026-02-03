export default function SectionWrapper({ children, className = '' }) {
    return (
        <section className={`w-full px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    );
}
