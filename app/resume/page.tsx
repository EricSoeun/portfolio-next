"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiShadcnui, SiMantine, SiSwiper } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";


const ABOUT_ME = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quos?",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Melisa KMNV"
        },
        {
            fieldName: "Phone",
            fieldValue: "+00 00 00 00 00"
        },
        {
            fieldName: "Experience",
            fieldValue: "3 Years"
        },
        {
            fieldName: "E-mail",
            fieldValue: "melisa@email.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Melisse"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, Laotian, Thai"
        },
    ]
}

const EXPERIENCE = {
    icon: "",
    title: "My experiences",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quos?",
    items: [
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Lorem Tech Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
    ]

}

const EDUCATION = {
    icon: "",
    title: "My education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quos?",
    items: [
        {
            institution: "Lorem Tech Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            institution: "Lorem Tech Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            institution: "Lorem Tech Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present"
        },
    ]
}

const SKILLS = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quos?",
    skillList: [

        // FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,
        // SiTailwindcss, SiNextdotjs, SiShadcnui
        {
            icon: <FaHtml5 />,
            name: "HTML5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },

        {
            icon: <SiShadcnui />,
            name: "Shadcn/ui"
        },
        {
            icon: <SiMantine />,
            name: "Mantine UI"
        },
        {
            icon: <SiSwiper />,
            name: "Swiper"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
    ]
}


const ResumePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experiences"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experiences">Experiences</TabsTrigger>
                        <TabsTrigger value="educations">Educations</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* EXPERIENCES */}
                        <TabsContent
                            value="experiences"
                            className="w-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{EXPERIENCE.title}</h3>
                                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{EXPERIENCE.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {EXPERIENCE.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h4 className="max-w-[260px] min-h-[45px] text-center lg:text-left">{item.position}</h4>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/70">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* EDUCATIONS */}
                        <TabsContent
                            value="educations"
                            className="w-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{EDUCATION.title}</h3>
                                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{EXPERIENCE.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {EDUCATION.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h4 className="max-w-[260px] min-h-[45px] text-center lg:text-left">{item.degree}</h4>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/70">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* SKILLS */}
                        <TabsContent
                            value="skills"
                            className="w-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">

                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{SKILLS.title}</h3>
                                    <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{SKILLS.description}</p>
                                </div>

                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {SKILLS.skillList.map((item, index) => (
                                        <li
                                            key={index}
                                        >
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>




                            </div>
                        </TabsContent>

                        {/* ABOUT ME */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left "
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{ABOUT_ME.title}</h3>
                                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{ABOUT_ME.description}</p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {ABOUT_ME.info.map((item, index) => (
                                        <li 
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/70">{item.fieldName}</span>
                                            <span className="text-xl ">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default ResumePage