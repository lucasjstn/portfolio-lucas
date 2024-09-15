import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#dedede] overflow-hidden relative">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                {/* Container que usa flexbox para alinhar o conteúdo */}
                <div className="flex flex-col lg:flex-row items-center gap-12  p-10 rounded-lg">
                    {/* Content - Texto */}
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-5 text-blue-950 font-semibold">
                            Olá, eu sou {BaseInfo.name}.
                        </h1>
                        <h1 className="text-3xl sm:text-2x md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem] text-blue-950 mb-4">
                            {BaseInfo.position}
                        </h1>
                        <a download href="/Curriculo-Lucas-Oliveira.pdf">
                            <button className="flex items-center space-x-2 md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                                <FaDownload />
                                <span>Baixar Currículo</span>
                            </button>{" "}
                        </a>
                    </div>

                    {/* Imagem ao lado do texto */}
                    <img
                        src="/profileimage.jpg" // Corrigido para o caminho correto
                        alt="Imagem de Lucas"
                        className="lg:w-96 w-[50%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
