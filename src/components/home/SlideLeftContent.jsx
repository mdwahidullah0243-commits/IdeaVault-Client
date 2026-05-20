import { slides } from "@/lib/data";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


const SlideLeftContent = ({currentSlide, goToSlide, slide}) => {
    return (
        <div key={currentSlide} className="slide-enter max-w-140">
            <div className="rounded-[20px] py-1.5 px-3.5 mb-3 text-xs font-semibold tracking-[0.08em] uppercase inline-block" style={{ background: `${slide.accent}22`, border: `1px solid ${slide.accent}44`, color: slide.accent }}>
                {slide.tag}
            </div>
            <h1 className="font-extrabold leading-[1.1] tracking-[-0.03em] text-white mb-5 whitespace-pre-line" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
                {slide.headline}
            </h1>
            <p className="text-base text-[#9ca3b8] leading-[1.7] mb-8 max-w-110">
                {slide.sub}
            </p>

            {/* Explore ideas and Add Idea Links */}
            <div className="flex gap-3 flex-wrap">
                <Link href={`/ideas`}>
                    <button className="flex gap-2 items-center bg-linear-135 from-[#6C63FF] to-[#a855f7] text-white border-none rounded-[10px] py-3 px-6 text-base font-semibold cursor-pointer transition-all duration-200 tracking-[0.02em] hover:-translate-y-0.5 hover:shadow-[0px_8px_24px] hover:shadow-[#6c63ff66]">
                        Explore Ideas <FaLongArrowAltRight />
                    </button>
                </Link>

                <Link href={`/add-idea`}>
                    <button className="bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-3 px-6 text-base font-medium cursor-pointer transition-all duration-200 hover:border-[#6C63FF] hover:text-[#6C63FF]">
                        Share Your Idea
                    </button>
                </Link>
            </div>

            {/* Slide dots */}
            <div className="flex items-center gap-2 mt-9">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-2 h-2 rounded-[50%] bg-[#ffffff4d] cursor-pointer transition-all duration-300 border-none ${i === currentSlide ? "bg-white w-6 rounded-sm" : ""}`}
                        onClick={() => goToSlide(i)}
                        style={{ background: i === currentSlide ? slide.accent : "rgba(255,255,255,0.2)" }} />
                ))}
            </div>
        </div>
    );
};

export default SlideLeftContent;