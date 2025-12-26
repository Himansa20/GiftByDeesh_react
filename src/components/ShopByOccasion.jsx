import React from 'react';
import birthdayIcon from '../assets/icons/cake.svg';
import anniversaryIcon from '../assets/icons/heart.svg';
import forHimIcon from '../assets/icons/necktie-.svg';
import forHerIcon from '../assets/icons/171724737_10351776.png';
import surpriseIcon from '../assets/icons/surprise-box.svg';

const ShopByOccasion = () => {
    const occasions = [
        {
            label: "Birthday Gift",
            icon: birthdayIcon,
            alt: "Birthday Cake Icon"
        },
        {
            label: "Anniversary Gift",
            icon: anniversaryIcon,
            alt: "Heart Icon"
        },
        {
            label: "For him",
            icon: forHimIcon,
            alt: "Necktie Icon"
        },
        {
            label: "For her",
            icon: forHerIcon,
            alt: "Bouquet Icon"
        },
        {
            label: "Surprise Box",
            icon: surpriseIcon,
            alt: "Surprise Box Icon"
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-16 bg-[#F8F8F8] my-8 rounded-2xl">
            <div className="text-center mb-10">
                <h2 className="text-[#7D7D7D] font-serif font-medium text-3xl md:text-4xl mb-3">
                    Shop By Occasion
                </h2>
                <p className="text-[#7D7D7D] font-sans font-normal text-base md:text-lg">
                    Find the perfect gift for every special moment in life
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {occasions.map((occasion, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer p-6 flex flex-col items-center justify-center gap-4 group"
                    >
                        <div className="w-16 h-16 flex items-center justify-center">
                            <img
                                src={occasion.icon}
                                alt={occasion.alt}
                                className="w-full h-full object-contain filter opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <span className="text-[#7D7D7D] font-sans font-medium text-sm md:text-base">
                            {occasion.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByOccasion;
