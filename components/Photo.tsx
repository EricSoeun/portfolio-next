"use client";

import Image from "next/image";

import { motion } from "framer-motion";



export const Photo = () => {
    return (
        <div className="w-full h-full relative ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
            >
                <motion.div
                    className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
                >
                    <Image
                        src={"/Cat03.jpeg"}
                        // src={"/crabe.png"}
                        alt="avatar"
                        priority
                        quality={100}
                        fill
                        className="object-contain rounded-full"
                    />
                </motion.div>
            </motion.div> 
        </div>
    )
}
