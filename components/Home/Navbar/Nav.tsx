"use client";
import { navLinks } from "@/constant/constants";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { contactData } from "@/Data/data";

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    return (
        <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <div className="text-3xl font-bold text-white">
                    LUCAS OLIVEIRA
                </div>
                {/* Links */}
                <div className="flex items-center space-x-10">
                    <div className="hidden lg:flex items-center space-x-8 ">
                        {" "}
                        {navLinks.map((navlink) => {
                            return (
                                <Link key={navlink.id} href={navlink.url}>
                                    {/* Use o elemento <a> */}
                                    <p className="nav__link text-white hover:text-blue-500">
                                        {navlink.label}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                {/* Github Button */}
                <div className="flex items-center space-x-4">
                    <a href={contactData.github} target="_blank">
                        <button className="flex items-center space-x-2 md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                            <FaGithub />
                            <span>Github</span>
                        </button>
                    </a>
                </div>
                {/* Burger */}
                <HiBars3
                    onClick={openNav}
                    className="w-8 h-8 cursor-pointer text-white lg:hidden"
                ></HiBars3>
            </div>
        </div>
    );
};

export default Nav;
