
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";


// NAV ITEMS : // 

export const NAV_ITEMS = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "works",
        path: "/works"
    },
    {
        name: "contact",
        path: "/contact"
    },
]


// MOBILE NAVIGATION //


export const MobileNav = () => {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href={"/"} >
                        <h1 className="text-4xl font-semibold">
                            M3L154 <span className="text-accent">!</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <SheetClose asChild key={item.name}>
                            <Link
                                
                                href={item.path}
                                className={`${item.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}
                            >
                                {item.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}


// DESKTOP NAVIGATION //

export const DesktopNav = () => {

    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {NAV_ITEMS.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className={`${item.path === pathname && "text-accent border-b-2 border-accent"} font-thin capitalize hover:text-accent transition-all`}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}
