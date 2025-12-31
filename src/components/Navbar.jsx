
import { useState } from 'react';
import { Menu, Search, ShoppingBag, Truck, User, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo/logo.jpg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState(null); // Track open index for mobile accordion

    const menuItems = [
        {
            label: "Birthday",
            dropdown: [
                "Birthday Gifts For Boyfriend", "Birthday Gifts For Husband", "Birthday Gifts For Girlfriend",
                "Birthday Gifts For Wife", "Birthday Gifts For Sister", "Birthday Gifts For Brother",
                "Birthday Gifts For Female Friend", "Birthday Gifts For Male Friend", "Birthday Gifts For Mother",
                "Birthday Gifts For Father"
            ]
        },
        {
            label: "Anniversary",
            dropdown: [
                "Anniversary Gifts For Wife", "Anniversary Gifts For Husband", "Anniversary Gifts For Couples"
            ]
        },
        {
            label: "Wedding",
            dropdown: [
                "Newly Wed Couple Gifts", "Bridesmaid Gifts", "Wedding Invitation Hampers",
                "Bride To Be Gifts", "Groom To Be Gifts", "Groomsmen Gifts"
            ]
        },
        {
            label: "Personalized",
            dropdown: [
                {
                    label: "Personalized Drinkware",
                    sub_menu: [
                        "Personalized Mugs", "Personalized Couple Mugs", "Personalized Tumblers", "Personalized Bottles"
                    ]
                },
                "Personalized Frames", "Personalized Travel Accessories"
            ]
        },
        {
            label: "By Occasion",
            dropdown: [
                {
                    label: "Valentines Day Gifts",
                    sub_menu: ["for Husband / Boyfriend", "for Wife / Girlfriend"]
                }
            ]
        },
        {
            label: "Relationship",
            dropdown: [
                "Wife / Girlfriend", "Husband / Boyfriend", "Friend (Men)", "Friend (Women)",
                "Sister", "Mother", "Gifts for Brother", "Father", "Daughter", "Kids", "Son"
            ]
        }
    ];

    const toggleMobileSubMenu = (index) => {
        setMobileOpenSubMenu(mobileOpenSubMenu === index ? null : index);
    };

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
                <nav className="hidden lg:block bg-white border-t border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                        <ul className="flex items-center justify-center gap-6 xl:gap-[60px] text-[#7D7D7D] text-sm font-medium">
                            {menuItems.map((item, index) => (
                                <li key={index} className="group relative">
                                    <a
                                        href="#"
                                        className="flex items-center gap-1 py-4 hover:text-[#D6737B] transition-colors"
                                    >
                                        {item.label}
                                        {item.dropdown && <ChevronDown className="w-4 h-4" />}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-2 border-[#D6737B]">
                                            <ul className="py-2">
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="relative group/sub">
                                                        {typeof subItem === 'string' ? (
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#D6737B] transition-colors">
                                                                {subItem}
                                                            </a>
                                                        ) : (
                                                            <div className="relative">
                                                                <a href="#" className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 hover:text-[#D6737B] transition-colors">
                                                                    {subItem.label}
                                                                    <ChevronRight className="w-4 h-4" />
                                                                </a>
                                                                {/* Sub-Dropdown Menu */}
                                                                {subItem.sub_menu && (
                                                                    <div className="absolute top-0 left-full w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 ml-1 border-l-2 border-[#D6737B]">
                                                                        <ul className="py-2">
                                                                            {subItem.sub_menu.map((nestedItem, nestedIndex) => (
                                                                                <li key={nestedIndex}>
                                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#D6737B] transition-colors">
                                                                                        {nestedItem}
                                                                                    </a>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Mobile Menu (Drawer) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
                        <ul className="flex flex-col text-gray-700 font-medium">
                            {menuItems.map((item, index) => (
                                <li key={index} className="border-b border-gray-50">
                                    <div
                                        className="flex items-center justify-between py-3 px-6 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => toggleMobileSubMenu(index)}
                                    >
                                        <a href="#" className="block flex-1">{item.label}</a>
                                        {item.dropdown && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileOpenSubMenu === index ? 'rotate-180' : ''}`} />
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {item.dropdown && mobileOpenSubMenu === index && (
                                        <div className="bg-gray-50 px-6 pb-2">
                                            <ul className="border-l-2 border-[#D6737B] pl-4">
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="py-2">
                                                        {typeof subItem === 'string' ? (
                                                            <a href="#" className="block text-sm text-gray-600 hover:text-[#D6737B]">{subItem}</a>
                                                        ) : (
                                                            <div>
                                                                <span className="block text-sm font-medium text-gray-800 mb-1">{subItem.label}</span>
                                                                {subItem.sub_menu && (
                                                                    <ul className="pl-2 space-y-2 mt-1">
                                                                        {subItem.sub_menu.map((nestedItem, nestedIndex) => (
                                                                            <li key={nestedIndex}>
                                                                                <a href="#" className="block text-xs text-gray-500 hover:text-[#D6737B]">{nestedItem}</a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
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

