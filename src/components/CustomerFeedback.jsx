import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import starIcon from '../assets/icons/star-solid-full.svg';

const CustomerFeedback = () => {
    const [width, setWidth] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, []);

    const feedbacks = [
        {
            name: "Kasuni Nimasha",
            product: "Lavish Lavender Gift Box",
            rating: 5,
            review: "Loved the way everything was packed and the handwritten note was a cherry on top. Keep it up guys! Will definitely recommend you to friends and family.",
            rotation: "-rotate-2"
        },
        {
            name: "Dilshan Perera",
            product: "Luxury Gift Hamper",
            rating: 5,
            review: "Absolutely loved the presentation. Delivery was fast and the quality exceeded my expectations. Perfect gifting experience.",
            rotation: "rotate-2"
        },
        {
            name: "Nethmi Silva",
            product: "Pretty Pink Box",
            rating: 5,
            review: "Such a beautiful gift box. Everything was neatly arranged and smelled amazing. Highly recommended for special occasions.",
            rotation: "-rotate-2"
        },
        {
            name: "Chamith Fernando",
            product: "Make Your Own Hamper",
            rating: 5,
            review: "The customization option is brilliant. My partner loved every item in the box. Will order again for sure.",
            rotation: "rotate-2"
        },
        {
            name: "Shanika Perera",
            product: "Birthday Surprise",
            rating: 5,
            review: "The best birthday gift I could have asked for. The quality of products is top notch.",
            rotation: "-rotate-1"
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:py-24 bg-white overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-[#525252] font-serif font-medium text-3xl md:text-5xl tracking-wide">
                    Customer’s Feedback
                </h2>
            </div>

            <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden p-4"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-8"
                >
                    {feedbacks.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`min-w-[300px] md:min-w-[350px] bg-[#FAFAFA] p-8 rounded-2xl shadow-sm flex flex-col justify-between ${item.rotation} hover:shadow-md transition-shadow duration-300`}
                        >
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={starIcon}
                                            alt="star"
                                            className="w-4 h-4"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(16%) saturate(695%) hue-rotate(314deg) brightness(92%) contrast(89%)' }}
                                        />
                                    ))}
                                </div>
                                <p className="text-[#7D7D7D] font-sans text-sm md:text-base leading-relaxed mb-6">
                                    "{item.review}"
                                </p>
                            </div>

                            <div className="mt-auto">
                                <h4 className="text-[#525252] font-sans font-semibold text-base mb-1">
                                    {item.name}
                                </h4>
                                <p className="text-[#7D7D7D] font-sans text-xs uppercase tracking-wide">
                                    {item.product}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CustomerFeedback;
