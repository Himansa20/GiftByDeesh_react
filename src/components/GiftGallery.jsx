import React from 'react';
import g1 from '../assets/gallery/1.jpg';
import g2 from '../assets/gallery/2.jpg';
import g3 from '../assets/gallery/3.jpg';
import g4 from '../assets/gallery/4.jpg';
import g5 from '../assets/gallery/5.jpg';
import g6 from '../assets/gallery/6.jpg';
import g7 from '../assets/gallery/7.jpg';
import g8 from '../assets/gallery/8.jpg';
import g9 from '../assets/gallery/9.jpg';

const GiftGallery = () => {
    const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:py-24 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-[#525252] font-serif font-medium text-3xl md:text-5xl tracking-wide">
                    Gift Gallery
                </h2>
                <p className="text-[#7D7D7D] font-sans mt-4 text-sm md:text-base max-w-2xl mx-auto">
                    Explore our curated collection of premium gifts and hampers
                </p>
            </div>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid overflow-hidden rounded-md cursor-pointer group"
                    >
                        <img
                            src={img}
                            alt={`Gift Gallery Item ${index + 1}`}
                            loading="lazy"
                            className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GiftGallery;
