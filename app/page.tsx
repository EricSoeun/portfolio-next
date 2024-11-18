import { FiDownload } from "react-icons/fi"

import { Button } from "@/components/ui/button"

import { Social } from "@/components/Social"
import { Photo } from "@/components/Photo"
import { Stats } from "@/components/Stats"


const Home = () => {

    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="py-32 flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span>Freelance Frontend Developer based in Paris</span>
                        <div className="my-6 flex flex-col gap-2">
                            <h3>Hello_World();</h3>
                            <h3>
                                <span>const name = </span>
                                <span className="text-accent">"Eric Soeun"</span>;
                            </h3>
                        </div>
                        <p className="max-w-[500px] mb-9 text-primary/70 italic">&lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quam!&lt;/p&gt;</p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant={"outline"} size={"lg"} className="uppercase flex items-center gap-2">
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social className="flex gap-6" />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>

            {/* <Stats/> */}
        </section>
    )
}

export default Home