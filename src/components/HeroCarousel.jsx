import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import c1 from '../assets/carousel/c1.png';

const slides = [
    {
        heading: "Create the Perfect Gift for Your Loved Ones",
        cta: "Customize Your Gift Box",
        image: c1,
        background: "bg-gradient-to-r from-[#FAF7F7] to-[#FFFFFF]"
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full relative overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`w-full h-[600px] relative transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                        }`}
                >
                    {/* Full Width Background Image */}
                    <img
                        src={slide.image}
                        alt="Hero Banner"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-start pl-8 md:pl-16 lg:pl-24"> {/* Left align with padding */}
                        <div className="text-left max-w-2xl animate-[float_6s_ease-in-out_infinite]">
                            <h1 className="font-serif text-[#525252] text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                                {slide.heading}
                            </h1>

                            <button className="group inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full text-lg hover:bg-brand/90 transition-colors shadow-lg">
                                <span>{slide.cta}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-[#D4A5A5] w-6' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
