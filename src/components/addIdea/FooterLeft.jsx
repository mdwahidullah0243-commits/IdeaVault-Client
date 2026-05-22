import { FaArrowLeftLong } from "react-icons/fa6";


const FooterLeft = ({step, setStep}) => {
    const prev = () => setStep(s => Math.max(s - 1, 0));

    return (
        <div className="flex gap-2 items-center">
            {
                step > 0 && (
                    // btnSecondary
                    <button
                        type="button" 
                        className="bg-[#ffffff0f] text-[#ffffff80] text-sm py-3 px-4 border-[0.5px] border-[#ffffff1f] rounded-lg cursor-pointer flex items-center gap-2" 
                        onClick={prev}>
                        <FaArrowLeftLong /> Back
                    </button>
                )
            }

            {/* btnGhost */}
            <button className="bg-none text-[#ffffff40] text-sm py-3 px-4 border-none rounded-lg cursor-pointer">
                Save Draft
            </button>
        </div>
    );
};

export default FooterLeft;