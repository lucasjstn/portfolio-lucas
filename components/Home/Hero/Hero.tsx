import { BaseInfo } from "@/Data/data";
import React from "react";

const Hero = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#dedede] overflow-hidden relative">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Content */}

                    <div>
                        {/* Subheading */}
                        <h1 className="text-2xl md:text-3xl mb-5 text-gray-900 font-semibold">
                            I am {BaseInfo.name}
                        </h1>
                        {/* Tittle  */}
                        <h1 className="text-bg text-3xl sm:text-4x md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]">{BaseInfo.position}</h1>
                    </div>
                </div>
                {/* Image */}
                <div></div>
            </div>
        </div>
    );
};

export default Hero;
