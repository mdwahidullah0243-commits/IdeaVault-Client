import { steps } from "@/lib/data";


const FooterRight = ({ step, next, setIsPublishIdea }) => {
    return (
        <div className="flex gap-2.5 items-center">
            {/* stepCount */}
            <span className="text-xs text-[#ffffff33]">
                {step + 1} / {steps.length}
            </span>

            {
                step < 3
                    ?
                    // btnPrimary
                    <button type="button" className="bg-[#e8b84b] text-[#1A1A2E] font-bold text-sm py-3 px-5 border-none rounded-lg cursor-pointer" onClick={next}>
                        Continue →
                    </button>
                    :
                    // btnPublish
                    <button onClick={() => setIsPublishIdea('publish')} type="submit" className="bg-[#e8b84b] text-[#1A1A2E] font-bold text-sm py-3 px-5.5 border-none rounded-lg cursor-pointer">
                        🚀 Publish Idea
                    </button>
            }
        </div>
    );
};

export default FooterRight;