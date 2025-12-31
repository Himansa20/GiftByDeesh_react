import React from 'react';
import makeBg from '../assets/make.png';

const MakeYourOwnHamperCTA = () => {
    return (
        <section className="w-full relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={makeBg}
                    alt="Make Your Own Hamper Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/50 to-transparent"></div>

            {/* Content Container */}
            <div className="relative h-full max-w-[1440px] mx-auto px-6 flex items-center justify-end">
                <div className="max-w-lg md:max-w-xl">
                    <h2 className="text-[#525252] font-serif font-medium text-3xl md:text-5xl leading-tight mb-8">
                        Create Your Own Hamper with Products You Love!
                    </h2>

                    <button className="bg-[#d6737b] text-white font-sans text-lg px-8 py-4 rounded-full shadow-md hover:bg-[#c45e66] hover:scale-105 transition-all duration-300">
                        Create Now &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MakeYourOwnHamperCTA;
