"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { WorkSliderButtons } from "@/components/WorkSliderButtons";



const PROJECTS = [
    {
        num: "01",
        category: "Frontend",
        title: "Project 1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illo.",
        stacks: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: "/crabe.png",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "Frontend",
        title: "Project 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illo.",
        stacks: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: "/crabe.png",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "Frontend",
        title: "Project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illo.",
        stacks: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: "/crabe.png",
        live: "",
        github: ""
    },
    {
        num: "04",
        category: "Frontend",
        title: "Project 4",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illo.",
        stacks: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: "/crabe.png",
        live: "",
        github: ""
    },
]

const WorksPage = () => {

    const [project, setProject] = useState(PROJECTS[0])

    console.log(project)


    const handleSlideCHange = (swiper : any) => {
        const currentProject =  swiper.activeIndex;
        setProject(PROJECTS[currentProject])     
    }


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition: {delay : 2.4, duration : 0.4, ease:"easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">

                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>

                            <p className="text-white/70">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stacks.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-xl text-accent"
                                    >
                                        {item.name}
                                        {index !== project.stacks.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>

                            <div className="border border-white/20" />
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            {/* <TooltipTrigger>
                                                <BsArrowUpRight />
                                            </TooltipTrigger> */}
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>


                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            {/* <TooltipTrigger>
                                                <BsArrowUpRight />
                                            </TooltipTrigger> */}
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>


                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideCHange}
                            className="xl:h-[520px] mb-12"
                            >
                            {PROJECTS.map((item, index) => (
                                <SwiperSlide 

                                    key={index}
                                    className="w-full"
                                    >
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* Overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill 
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <WorkSliderButtons
                                className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                buttonClassName={`bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all`}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default WorksPage