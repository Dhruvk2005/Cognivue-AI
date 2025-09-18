"use client";

import { motion } from "framer-motion";
import React, { useMemo } from "react";
import Link from "next/link";
import { Marquee } from "./marquee";
import { MarqueeDemo } from "./marqueedemmo";
import { FloatingDockDemo } from "./dock";
import { GoogleGeminiEffectDemo } from "./hero";

export default function AnimatedAuroraBackground() {
    const stars = useMemo(() => {
        return Array.from({ length: 60 }, (_, i) => {
            const variation = (i * 0.618034) % 1;
            return {
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 1 + variation * 4,
                delay: Math.random() * 8,
                duration: 4 + variation * 6,
                opacity: 0.4 + variation * 0.6,
            };
        });
    }, []);

    return (
        <div className='relative w-full min-h-screen'>

            <div className='relative w-full z-20'>
                <div className='flex justify-between w-full p-[20px]'>
                    <div className='text-[20px] text-white '>
                        Cognivue AI
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <FloatingDockDemo />
                        <div>
                            <button className="px-8 py-3 bg-[#1E90FF] text-white font-semibold rounded-full shadow-md 
                       hover:bg-[#1f1c82] hover:scale-105 hover:shadow-lg 
                       transition-all duration-200 ease-in-out hover:cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative w-full flex flex-col items-center justify-center mt-[80px] z-20">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl px-4">
                    <h2 className="text-5xl font-bold text-[#FFFFFF] mb-4">
                        Smarter Business Decisions with AI
                    </h2>
                    <h3 className="text-2xl text-[#E0E0E0] mb-8">
                        Cognivue AI analyzes your business data and gives you actionable insights in seconds
                    </h3>
                </div>

                <div className="w-full max-w-md flex flex-col m-[20px] justify-center z-20">
                    {/* <div className="bg-gray-900/60 border border-gray-700  text-gray-200 flex flex-col p-[10px] items-center w-full rounded-[20px]">
                        <span className="font-semibold mb-2">cognivue ai is finally here</span>
                        <div className="p-[10px] text-[white] flex gap-[20px]">
                            <button className="bg-[#2E2BAA] p-[10px] rounded-[20px] hover:bg-[#1f1c82] transition-colors">
                                Get Started
                            </button>
                            <button className="bg-[#111827] p-[10px] rounded-[20px] hover:bg-[#000] transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div> */}

                    <Link className=" p-[10px] flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400
text-white
hover:scale-105 hover:shadow-lg" href={"/signup"} >

                    <button  >Get Started</button>
</Link>

                    <button className="p-[10px] bg-transparent border border-white/30 text-white
hover:bg-white/10 hover:border-white/50
" >Learn More</button>
                </div>





                <div className="relative w-full -mt-[200px] z-10">
                    <GoogleGeminiEffectDemo />
                </div>
            </div>


            <div className="absolute inset-0 bg-gradient-to-br from-blue via-gray-900 to-black z-0"></div>
        </div>
    );
}