'use client';

import { slides } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import SlideLeftContent from "./SlideLeftContent";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((p) => (p + 1) % slides.length);
        }, 4000);

        return () => clearInterval(intervalRef.current)
    });

    const goToSlide = (i) => {
        setCurrentSlide(i);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((p) => (p + 1) % slides.length);
        }, 4000);
    };

    const slide = slides[currentSlide];
    const animatedBg = {
        background: `radial-gradient(ellipse 60% 80% at 70% 50%, ${slide.accent}18 0%, transparent 70%)`
    }

    return (
        <div>
            {/* BANNER */}
            <div className="relative overflow-hidden min-h-140 flex items-center">
                {/* Animated bg */}
                <div className={`absolute inset-0 bg-[${slide.bg}] transition-colors duration-800 ease-[ease]`} />
                <div className={`absolute inset-0`} style={animatedBg} />
                <div style={{ border: `1px solid ${slide.accent}10` }} className={`absolute w-150 h-150 rounded-[50%] border top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none`} />
                <div style={{ border: `1px solid ${slide.accent}06` }} className={`absolute w-225 h-225 rounded-[50%] border top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none`} />

                <div className="relative z-2 max-w-275 my-0 mx-auto py-15 px-8 flex items-center justify-between w-full gap-10">
                    <SlideLeftContent
                        currentSlide={currentSlide}
                        goToSlide={goToSlide}
                        slide={slide} />

                    {/* Slide Right Content */}
                    <div
                        key={`emoji-${currentSlide}`}
                        className="select-none leading-px float-animate"
                        style={{ fontSize: "clamp(80px,12vw,130px)", filter: `drop-shadow(0 0 60px ${slide.accent}66)` }}>
                        {slide.img}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;