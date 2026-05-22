import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const IdeaCard = ({ idea }) => {
    return (
        <div key={idea._id} className="bg-[#ffffff0a] border border-[#ffffff14] rounded-4xl p-5 transition-all duration-200 cursor-pointer hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] hover:-translate-y-0.75">
            {/* tag-chip */}
            <span className="bg-[#4FC3F718] text-[#4FC3F7] border border-[#4FC3F730] py-1 px-3 rounded-lg text-xs font-semibold tracking-wider uppercase">
                {idea.category}
            </span>

            {/* title */}
            <h3 className="text-lg font-bold text-[#e8eaf0] leading-[1.4] my-3">
                {idea.title}
            </h3>

            {/* short-description */}
            <p className="text-sm text-[#6b7280] mb-4 leading-[1.6]">
                {idea.shortDesc}
            </p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* avatar */}
                    <Image
                        src={idea.imageUrl}
                        alt="avatar"
                        width={50}
                        height={50}
                        className="w-9 h-9 rounded-[50%] flex items-center justify-center text-xs font-bold tracking-[0.03em] shrink-0 bg-[#4FC3F725] text-[#6C63FF]" />

                    {/* author */}
                    <span className="text-xs text-[#6b7280]">
                        {idea?.author || 'Innovator'}
                    </span>
                </div>

                <Link href={`/ideas/${idea._id}`}>
                    <Button variant="outline" className='border border-[#6b7280] text-[#aaaaaa] hover:text-[#4FC3F7] hover:bg-[#4FC3F718]'>
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default IdeaCard;