"use client";

import { motion } from "framer-motion";
import React, { useMemo } from "react";
import Link from "next/link";
import { Marquee } from "./marquee";

interface StarProps {
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    opacity: number;
}

const Star = React.memo<StarProps>(({ x, y, size, delay, duration, opacity }) => {
    return (
        <motion.div
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
            }}
            animate={{
                opacity: [0, opacity, opacity * 0.3, opacity, 0],
                scale: [0.5, 1, 0.8, 1, 0.5],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
});

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
        <div className="relative w-full h-screen overflow-hidden">
            {/* Base gradient - deep space blue to purple */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, 
            #1e3a8a 0%,     /* deep blue */
            #3730a3 15%,    /* indigo */
            #581c87 35%,    /* purple */
            #7c2d92 55%,    /* purple-700 */
            #be185d 75%,    /* pink-700 */
            #dc2626 90%,    /* red-600 */
            #ea580c 100%    /* orange-600 */
          )`
                }}
            />

            {/* Aurora flow layer 1 - main flowing colors */}
            <motion.div
                className="absolute inset-0 opacity-70"
                style={{
                    background: `radial-gradient(ellipse 120% 80% at 50% 90%, 
            rgba(251, 146, 60, 0.8) 0%,     /* orange glow */
            rgba(236, 72, 153, 0.6) 25%,    /* pink */
            rgba(147, 51, 234, 0.4) 50%,    /* purple */
            rgba(59, 130, 246, 0.3) 75%,    /* blue */
            transparent 100%
          )`,
                    filter: "blur(60px)",
                }}
                animate={{
                    transform: [
                        "scale(1) translate(0%, 0%)",
                        "scale(1.1) translate(-2%, -1%)",
                        "scale(0.95) translate(1%, 0.5%)",
                        "scale(1.05) translate(-1%, -0.5%)",
                        "scale(1) translate(0%, 0%)",
                    ],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Aurora flow layer 2 - secondary colors */}
            <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `radial-gradient(ellipse 100% 70% at 60% 80%, 
            rgba(251, 191, 36, 0.7) 0%,     /* amber */
            rgba(244, 114, 182, 0.5) 30%,   /* pink-400 */
            rgba(168, 85, 247, 0.4) 60%,    /* purple-500 */
            transparent 80%
          )`,
                    filter: "blur(40px)",
                }}
                animate={{
                    transform: [
                        "scale(1) translate(0%, 0%)",
                        "scale(1.15) translate(1%, 1%)",
                        "scale(0.9) translate(-1%, -0.5%)",
                        "scale(1.08) translate(0.5%, 0%)",
                        "scale(1) translate(0%, 0%)",
                    ],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Aurora clouds - soft flowing shapes */}
            <motion.div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `radial-gradient(ellipse 80% 60% at 40% 70%, 
            rgba(236, 72, 153, 0.6) 0%,     /* pink center */
            rgba(147, 51, 234, 0.3) 40%,    /* purple */
            transparent 70%
          ), radial-gradient(ellipse 90% 50% at 70% 60%, 
            rgba(251, 146, 60, 0.5) 0%,     /* orange */
            rgba(168, 85, 247, 0.2) 50%,    /* purple */
            transparent 80%
          )`,
                    filter: "blur(80px)",
                }}
                animate={{
                    transform: [
                        "translate(0%, 0%) rotate(0deg)",
                        "translate(-1%, -1%) rotate(0.5deg)",
                        "translate(1%, 0%) rotate(-0.3deg)",
                        "translate(-0.5%, 1%) rotate(0.2deg)",
                        "translate(0%, 0%) rotate(0deg)",
                    ],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Bright central aurora */}
            <motion.div
                className="absolute inset-0 opacity-60"
                style={{
                    background: `radial-gradient(ellipse 70% 40% at 50% 85%, 
            rgba(251, 146, 60, 0.8) 0%,     /* bright orange */
            rgba(236, 72, 153, 0.6) 30%,    /* pink */
            rgba(147, 51, 234, 0.3) 60%,    /* purple */
            transparent 80%
          )`,
                    filter: "blur(30px)",
                }}
                animate={{
                    opacity: [0.4, 0.8, 0.6, 0.9, 0.4],
                    transform: [
                        "scale(1)",
                        "scale(1.2)",
                        "scale(0.9)",
                        "scale(1.1)",
                        "scale(1)",
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Flowing aurora streams */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `linear-gradient(45deg, 
            transparent 0%, 
            rgba(251, 146, 60, 0.4) 20%, 
            rgba(236, 72, 153, 0.3) 40%, 
            rgba(147, 51, 234, 0.2) 60%, 
            transparent 80%
          )`,
                    filter: "blur(50px)",
                }}
                animate={{
                    transform: [
                        "translateX(-5%) skewX(-2deg)",
                        "translateX(3%) skewX(1deg)",
                        "translateX(-2%) skewX(-1deg)",
                        "translateX(5%) skewX(2deg)",
                        "translateX(-5%) skewX(-2deg)",
                    ],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Subtle texture overlay */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
                      radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)`,
                    filter: "blur(100px)",
                }}
                animate={{
                    transform: [
                        "translate(0%, 0%)",
                        "translate(1%, -1%)",
                        "translate(-1%, 1%)",
                        "translate(0.5%, -0.5%)",
                        "translate(0%, 0%)",
                    ],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {stars.map((star, index) => (
                    <Star
                        key={index}
                        x={star.x}
                        y={star.y}
                        size={star.size}
                        delay={star.delay}
                        duration={star.duration}
                        opacity={star.opacity}
                    />
                ))}
            </div>

            {/* Content area */}


            <div className='relative ' >


                <div className=' flex justify-between w-full p-[20px]  ' >
                    <div className=' text-[20px]'>
                        Cognivue AI


                    </div>
                    <div className="flex items-center gap-[20px]" >
                        <ul className='flex gap-[20px] ' >
                            <Link
                                href={"/signup"}
                            >
                                <li className=' text-[white] hover:text-[lightgrey] hover:cursor-pointer  hover:transition  ' >Sign up</li>
                            </Link>
                            <Link href={"/login"} >
                                <li className=' text-[white] hover:text-[lightgrey] hover:cursor-pointer ' >Log in</li>
                            </Link>
                        </ul>

                        <div>
                            <button className="px-6 py-3 bg-[#2E2BAA] text-white font-semibold rounded-full shadow-md 
                   hover:bg-[#1f1c82] hover:scale-105 hover:shadow-lg 
                   transition-all duration-200 ease-in-out hover:cursor-pointer ">
                                Get Started
                            </button>

                        </div>

                    </div>


                </div>

                <div className="flex flex-col h-96 items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">Smarter Business Decisions with AI</h2>
                    <h3 className="text-xl" > Cognivue AI analyzes your business data and gives you actionable insights in seconds</h3>
                </div>
            </div>

            <div className="absolute bottom-0 " >
                <Marquee>
                    <span className="mx-4 ">Health & Wellness Practitioner</span>
                    <span className="mx-4">Online Educator / Coach</span>
                    <span className="mx-4">Event Planner / Decorator</span>
                    <span className="mx-4">Real Estate Agent</span>
                    <span className="mx-4">Therapist / Counsellor</span>
                    <span className="mx-4">Restaurant / Food Vendor</span>
                </Marquee>
            </div>

        </div>


    );
}