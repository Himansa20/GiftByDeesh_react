import React from 'react';
import makeBg from '../assets/make.png';

const MakeYourOwnHamperCTA = () => {
    return (
        <section className="w-full relative h-auto py-20 md:py-0 md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={makeBg}
                    alt="Make Your Own Hamper Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent md:bg-gradient-to-l md:from-white/90 md:via-white/50 md:to-transparent"></div>

            {/* Content Container */}
            <div className="relative h-full max-w-[1440px] mx-auto px-6 flex items-center justify-center md:justify-end">
                <div className="max-w-lg md:max-w-xl text-center md:text-left">
                    <h2 className="text-[#525252] font-serif font-medium text-2xl md:text-5xl leading-relaxed md:leading-tight mb-6 md:mb-8">
                        Create Your Own Hamper with Products You Love!
                    </h2>

                    <button className="bg-[#d6737b] text-white font-sans text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full shadow-md hover:bg-[#c45e66] hover:scale-105 transition-all duration-300">
                        Create Now &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MakeYourOwnHamperCTA;
