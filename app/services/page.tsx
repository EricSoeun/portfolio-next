"use client";

import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";


const SERVICES = [
    {
        num: "01",
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aliquam?",
        href: "",
    },
    {
        num: "02",
        title: "UX/UI Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aliquam?",
        href: "",
    },
    {
        num: "03",
        title: "Mobile App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aliquam?",
        href: "",
    },
]


const ServicesPage = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {SERVICES.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                                <Link 
                                    href={item.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                                    >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            <h2>{item.title}</h2>
                            <p className="text-white/70">{item.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 

export default ServicesPage