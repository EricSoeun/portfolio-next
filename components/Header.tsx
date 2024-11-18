import Link from "next/link";



import { Button } from "./ui/button";
import { DesktopNav, MobileNav } from "./Navigation";

export const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">M <span className="text-accent">!</span></h1>
                </Link>

                {/* DESTOP NAVIGATION */}
                <div className="hidden xl:flex items-center gap-8">
                    <DesktopNav />
                    <Link href={"/contact"}>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* MOBILE NAVIGATION */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
