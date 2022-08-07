import { useState } from "react";
import { motion } from "framer-motion"
import MobileNavigation from "./MobileNavigation";
import { useTheme } from 'next-themes'

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

const NavBar = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    return (
        <div className="sticky shadow-lg w-screen flex items-center justify-between px-4 h-12">
            <div>link Previewer</div>
            <div className="flex items-center gap-3">
                <div className="hidden sm:block py-3 space-x-4">
                    <a href="#home" className="p-2">Home</a>
                    <a href="#home" className="p-2">Features</a>
                    <a href="#home" className="p-2">About</a>
                </div>
                <div className={`bg-gray-600 flex items-center px-[2px] rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`}
                    onClick={() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                >
                    <span className="absolute left-0">🌜</span>
                    <motion.div
                        className="w-5 h-5 bg-white rounded-full z-40"
                        layout
                        transition={spring}
                    />
                    <span className="absolute right-0.5">🌞</span>
                </div>
                <MobileNavigation />
            </div>
        </div>
    )

}


export default NavBar;