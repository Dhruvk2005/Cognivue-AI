"use client";

import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Marquee } from "./marquee";
import { MarqueeDemo } from "./marqueedemmo";
import { FloatingDockDemo } from "./dock";
import { GoogleGeminiEffectDemo } from "./hero";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import Loading from "./loading";

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


    const router = useRouter()

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [effectDone, setEffectDone] = useState(false)


    useEffect(() => {

        const Timer = setTimeout(() => {

            setShow(true)
        }, 2000)

        return () => clearTimeout(Timer)

    }, [])


    const handleGetClick = () => {
        setLoading(true)

        setTimeout(() => {
            router.push("/signup")
            setLoading(false)
        }, 1000)

    }


    // useEffect(()=>{
    //     if(!effectDone){
    //         document.body.style.overflow = "hidden"
    //     }else{
    //         document.body.style.overflow = "auto"
    //     }

    // },[effectDone])


    if (loading) {
        return <Loading />
    }

    return (
        <div className='relative w-full min-h-screen'>

            <div className='fixed top-0 left-0 right-0 w-full z-50 bg-black/20 backdrop-blur-sm'>
                <div className='flex items-center justify-between w-full p-[20px]'>
                    <div className='  sm:text-[20px] text-white '>
                        CROOSE AI
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <FloatingDockDemo />

                        <div>

                            <button onClick={handleGetClick} className=" w-[150px] px-10 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400
text-white
hover:scale-105 hover:shadow-lg text-white font-semibold rounded-full shadow-md 
                       hover:bg-[#1f1c82] hover:scale-105 hover:shadow-lg 
                       transition-all duration-200 ease-in-out hover:cursor-pointer">
                                Sign Up
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="relative w-full flex flex-col items-center justify-center  z-20">

                <div className="flex mt-[180px] flex-col items-center justify-center text-center" >
                    <div className="flex flex-col items-center justify-center text-center max-w-4xl px-4">
                        <h2 className="text-[30px] sm:text-[30px] md:text-[40px] lg:text-5xl  font-bold text-[#FFFFFF] mb-4">
                            Smarter Business Decisions with AI
                        </h2>
                        <h3 className=" text-[15px] sm:text-[20px] lg:text-2xl text-[#E0E0E0] mb-8">
                            Cognivue AI analyzes your business data and gives you actionable insights in seconds
                        </h3>
                    </div>

                    <div className=" w-[80%] sm:w-full max-w-md flex flex-col m-[20px] justify-center z-20">
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

                        <div onClick={handleGetClick} className=" p-[10px] hover:cursor-pointer flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400
text-white
hover:scale-105 hover:shadow-lg">

                            <button  >Get Started</button>
                        </div>

                        <button className="p-[10px] bg-transparent border border-white/30 text-white
hover:bg-white/10 hover:border-white/50 hover:cursor-pointer
" >Learn More</button>
                    </div>

                </div>

                {show && (


                    <div className="mt-[20px]">
                        <Icon className=" " icon="line-md:arrow-down" width="24" height="24" style={{ color: "#fff" }} />
                    </div>
                )}




                {/* {!effectDone &&( */}
                <div className="relative w-full -mt-[200px]  z-10">
                    <GoogleGeminiEffectDemo />
                </div>

                <div className="relative w-full bg-gradient-to-br from-gray-900 via-black to-blue z-10">
                    <div className="flex flex-col items-center justify-center h-[900px] md:h-[700px] py-20 px-4">
                        <h2 className=" text-center mt-[100px] md:mt-[0px] text-4xl md:text-5xl font-bold text-white mb-6">Powerful AI Insights</h2>
                        <p className="text-xl text-gray-300 max-w-2xl text-center mb-12">
                            Transform your business data into actionable insights with our advanced AI analytics
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                                <h3 className="text-2xl font-semibold text-white mb-3">Real-time Analytics</h3>
                                <p className="text-gray-300">Get instant insights from your data as it flows in</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                                <h3 className="text-2xl font-semibold text-white mb-3">Predictive Models</h3>
                                <p className="text-gray-300">Forecast trends and make data-driven decisions</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                                <h3 className="text-2xl font-semibold text-white mb-3">Smart Automation</h3>
                                <p className="text-gray-300">Automate workflows with intelligent AI assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>


            <div className="absolute inset-0 bg-gradient-to-br from-blue via-gray-900 to-black z-0"></div>


        </div>

    )
}

