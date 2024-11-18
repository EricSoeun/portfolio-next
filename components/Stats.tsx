"use client";

import CountUP from "react-countup";


const STATS = [
    {
        num: 3,
        text: "Years of experience"
    },
    {
        num: 56,
        text: "Projects"
    },
    {
        num: 120,
        text: "Commits"
    },
    {
        num: 40,
        text: "Clients"
    },
]

export const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {STATS.map((item, index) => (
                        <div 
                            key={index}
                            className="flex-1 flex gap-4 items-center text-sm xl:text-md xl:justify-start"
                            >
                            <CountUP
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${item.text.length <15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/70`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
