import React from 'react';
import ham1 from '../assets/hamper/hm1.webp';
import ham2 from '../assets/hamper/hm2.webp';
import ham3 from '../assets/hamper/hm3.webp';
import ham4 from '../assets/hamper/hm4.webp';
import starIcon from '../assets/icons/star-solid-full.svg';

const MakeYourOwnHamper = () => {
    const products = [
        {
            title: "24 Hours Gift Hamper",
            image: ham1,
            price: "LKR 2,199",
            rating: 5,
            reviews: 20
        },
        {
            title: "Five Senses Gift",
            image: ham2,
            price: "LKR 1,899",
            rating: 5,
            reviews: 18
        },
        {
            title: "Make Your Own Hamper - Male",
            image: ham3,
            price: "LKR 2,499",
            rating: 5,
            reviews: 22
        },
        {
            title: "Make Your Own Hamper - Female",
            image: ham4,
            price: "LKR 2,299",
            rating: 5,
            reviews: 25
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-[#525252] font-serif font-medium text-3xl md:text-4xl">
                    Make Your Own Hampers
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer group"
                    >
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-t-md">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-[#7D7D7D] font-sans font-medium text-base md:text-lg mb-2 line-clamp-2 min-h-[3rem]">
                                {product.title}
                            </h3>

                            <div className="flex items-center justify-center gap-1 mb-2">
                                {[...Array(product.rating)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={starIcon}
                                        alt="star"
                                        className="w-4 h-4"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(16%) saturate(695%) hue-rotate(314deg) brightness(92%) contrast(89%)' }}
                                    // Note: The filter above is an approximation for #D4A5A5. 
                                    // Since we are using an SVG img tag, we can't easily valid fill color without inline SVG or a mask.
                                    // For now using the icon as is or applying a filter if it was black. 
                                    // Assuming the icon provided might already be colored or we need to mask it.
                                    // Let's use a simpler approach if the SVG is just a shape: CSS filter for color #D4A5A5
                                    />
                                ))}
                                <span className="text-[#7D7D7D] text-xs ml-1">
                                    ({product.reviews})
                                </span>
                            </div>

                            <p className="text-[#525252] font-sans font-semibold text-lg">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MakeYourOwnHamper;
