import React from 'react';
import { Truck, Zap, Wallet, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
    const items = [
        {
            icon: <Truck size={28} color="#D4A5A5" />,
            text: "Free Shipping"
        },
        {
            icon: <Zap size={28} color="#D4A5A5" />,
            text: "Super Fast Delivery"
        },
        {
            icon: <Wallet size={28} color="#D4A5A5" />,
            text: "COD Available"
        },
        {
            icon: <ShieldCheck size={28} color="#D4A5A5" />,
            text: "100% Secure Checkout"
        }
    ];

    return (
        <section className="w-full bg-[#F8F8F8] border-t border-black/5 py-12">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-4 py-4 px-6 rounded-lg hover:-translate-y-1 transition-transform duration-300 cursor-default"
                        >
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            <span className="text-[#7D7D7D] font-sans font-medium text-base md:text-lg">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
