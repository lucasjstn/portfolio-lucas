import { navLinks } from "@/constant/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    return (
        <div>
            {/* Overlay */}
            <div
                className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
            ></div>
            {/* Nav Links */}
            <div
                className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
            >
                {navLinks.map((navlink) => {
                    return (
                        <Link key={navlink.id} href={navlink.url}>
                            {/* Use o elemento <a> */}
                            <p className="nav__link text-white ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                                {navlink.label}
                            </p>
                        </Link>
                    );
                })}
                <CgClose onClick={closeNav} className="absolute right-[1.4rem] top-[0.7rem] w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer" />
            </div>
            {/* Close Button */}
        </div>
    );
};

export default MobileNav;
