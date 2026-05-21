import { FaLock } from "react-icons/fa";

const BrandHeader = () => {
    return (
        <div className='pt-8 mb-7'>
            <div className='flex items-center gap-2 mb-5'>
                <div className='w-7 h-7 bg-[#E8B84B] text-[#292929] rounded-lg flex items-center justify-center'><FaLock /></div>
                <span className={`font-extrabold text-xl text-[#E8B84B] tracking-[-0.3px]`}>IdeaVault</span>
            </div>

            <h1 className={`text-4xl font-extrabold text-white leading-[1.1] mb-2`}>
                Launch your idea
                <span className='text-[#E8B84B]'>.</span>
            </h1>

            <p className='text-base text-[#ffffff66] leading-normal'>
                Fill in the details below. The more you share, the more the community can validate.
            </p>
        </div>
    );
};

export default BrandHeader;