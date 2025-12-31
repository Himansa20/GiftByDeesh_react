import React from 'react';
import bridesmaidImg from '../assets/wedding/Bridesmaid-Gifts-1.webp';
import brideToBeImg from '../assets/wedding/we2.webp';
import newCoupleImg from '../assets/wedding/we3.webp';
import anniversaryImg from '../assets/wedding/we4.jpg';

const WeddingCollection = () => {
    const collections = [
        {
            title: "Bridesmaid",
            subtitle: "Gifts",
            image: bridesmaidImg
        },
        {
            title: "Bride To Be",
            subtitle: "Gifts",
            image: brideToBeImg
        },
        {
            title: "The New Couple",
            subtitle: "Gifts",
            image: newCoupleImg
        },
        {
            title: "Anniversary",
            subtitle: "Gifts",
            image: anniversaryImg
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:py-24 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-[#525252] font-serif font-medium text-3xl md:text-5xl tracking-wide">
                    Wedding Collection
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {collections.map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer shadow-md"
                    >
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={`${item.title} ${item.subtitle}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>

                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center transform translate-y-2 transition-transform duration-500 ease-out group-hover:translate-y-0">
                            <h3 className="text-white font-serif text-2xl md:text-3xl mb-1 tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-[#F2F2F2] font-sans text-sm md:text-base uppercase tracking-widest opacity-90">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeddingCollection;
