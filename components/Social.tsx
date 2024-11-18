import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";


const SOCIALS = [
    {
        icon: <FaGithub />,
        path: "/"
    },
    {
        icon: <FaLinkedin />,
        path: "/"
    },
    {
        icon: <FaTwitter />,
        path: "/"
    },
]

interface SocialProps {
    className : string;
}
export const Social = ({className}: SocialProps) => {
    return (
        <div className={className}>
            {SOCIALS.map((item, index) => (
                <Link
                    href={item.path}
                    key={index}
                >
                    <Button variant={"primary"} size={"icon"}>
                        {item.icon}
                    </Button>
                </Link>
            ))}
        </div>
    )
}
