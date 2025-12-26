
import { useState } from 'react';
import { Menu, Search, ShoppingBag, Truck, User, X } from 'lucide-react';
import logo from '../assets/logo/logo.jpg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Top Info Bar (Marquee) */}
            <div className="bg-brand text-white overflow-hidden py-2 text-sm font-medium">
                <div className="marquee-container">
                    <div className="marquee-content">
                        <span className="mx-4">5 lakh+ orders delivered</span> •
                        <span className="mx-4">COD Available</span> •
                        <span className="mx-4">Fast Delivery</span> •
                        <span className="mx-4">Special Christmas Discount</span>
                    </div>
                </div>
            </div>

            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between gap-4">

                        {/* Left: Mobile Menu & Logo */}
                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-700" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-700" />
                                )}
                            </button>

                            {/* Logo */}
                            <a href="#" className="flex items-center gap-2">
                                <img src={logo} alt="GiftByDeesh" className="h-12 w-auto object-contain" />
                                <span className="text-2xl font-bold text-brand tracking-tight">GiftByDeesh</span>
                            </a>
                        </div>

                        {/* Center: Search Bar (Hidden on mobile, visible on lg) */}
                        <div className="hidden lg:flex flex-1 max-w-xl mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search gifts..."
                                    className="w-full py-3 pl-6 pr-14 rounded-full border-2 border-brand/20 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all text-sm placeholder-gray-400"
                                />
                                <button
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-brand text-white rounded-full hover:bg-brand/90 transition-colors shadow-sm flex items-center justify-center"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* Mobile Search Toggle */}
                            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
                                <Search className="w-6 h-6 text-gray-700" />
                            </button>

                            <a href="#" className="flex flex-col items-center gap-0.5 group">
                                <div className="p-2 group-hover:bg-brand/10 rounded-full transition-colors relative">
                                    <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-brand" />
                                    <span
                                        className="absolute top-0 right-0 bg-brand text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                                </div>
                                <span
                                    className="hidden md:block text-[10px] font-medium text-gray-600 group-hover:text-brand">Cart</span>
                            </a>

                            <a href="#" className="hidden md:flex flex-col items-center gap-0.5 group">
                                <div className="p-2 group-hover:bg-brand/10 rounded-full transition-colors">
                                    <Truck className="w-6 h-6 text-gray-700 group-hover:text-brand" />
                                </div>
                                <span className="text-[10px] font-medium text-gray-600 group-hover:text-brand">Track</span>
                            </a>

                            <a href="#" className="flex flex-col items-center gap-0.5 group">
                                <div className="p-2 group-hover:bg-brand/10 rounded-full transition-colors">
                                    <User className="w-6 h-6 text-gray-700 group-hover:text-brand" />
                                </div>
                                <span
                                    className="hidden md:block text-[10px] font-medium text-gray-600 group-hover:text-brand">Account</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar (Desktop) */}
                <nav className="hidden lg:block bg-brand border-t border-white/20">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                        <ul className="flex items-center justify-between text-white text-sm font-medium">
                            {['Corporate Gifting', 'Make your own Hamper', 'Birth Day', 'Anniversary', 'Weddings', 'Personalized', 'By Occasion', 'Relationship'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="block py-3 hover:text-white/80 hover:bg-white/10 px-4 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Mobile Menu (Hidden by default) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t">
                        <ul className="flex flex-col bg-white text-gray-700 font-medium">
                            {['Corporate Gifting', 'Make your own Hamper', 'Birth Day', 'Anniversary', 'Weddings', 'Personalized', 'By Occasion', 'Relationship'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="block py-3 px-6 border-b hover:bg-gray-50">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;

