import React from 'react';
import best1 from '../assets/bestsellinghamper/best.webp';
import best2 from '../assets/bestsellinghamper/best2.webp';
import best3 from '../assets/bestsellinghamper/best3.webp';
import best4 from '../assets/bestsellinghamper/best4.webp';
import starIcon from '../assets/icons/star-solid-full.svg';

const BestsellingHampers = () => {
    const products = [
        {
            title: "Gourmet Gift Box",
            image: best1,
            price: "9,800 LKR",
            rating: 5,
            reviews: 20
        },
        {
            title: "Coffee Before Talkie Gift Hamper",
            image: best2,
            price: "10,500 LKR",
            rating: 5,
            reviews: 18
        },
        {
            title: "Friends Lover Gift Box",
            image: best3,
            price: "11,250 LKR",
            rating: 5,
            reviews: 22
        },
        {
            title: "Choco Lover Gift Box",
            image: best4,
            price: "10,150 LKR",
            rating: 5,
            reviews: 25
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-[#525252] font-serif font-medium text-3xl md:text-4xl">
                    Bestselling Hampers
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
                            <h3 className="text-[#7D7D7D] font-sans font-medium text-base md:text-lg mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
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

export default BestsellingHampers;
