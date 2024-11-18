"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"


interface WorkSliderButtonsProps {
    className?: string;
    buttonClassName?: string;
    iconClassName?: string;
}

export const WorkSliderButtons = ({ className, buttonClassName, iconClassName }: WorkSliderButtonsProps) => {

    const swiper = useSwiper();

    return (
        <div className={className}>
            <button className={buttonClassName} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={`${iconClassName}`} />
            </button>
            <button className={buttonClassName} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconClassName} />
            </button>
        </div>
    )
}
