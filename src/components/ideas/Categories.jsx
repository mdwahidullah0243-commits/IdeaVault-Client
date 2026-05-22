'use client';

import { CATEGORIES } from "@/lib/data";
import { useState } from "react";

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className='flex flex-wrap gap-2'>
            {
                CATEGORIES.map((c) => {
                    return (
                        <button
                            key={c}
                            onClick={() => setActiveCategory(c)}
                            className={`border rounded-[20px] py-2 px-4 text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap 
                            ${activeCategory === c
                                ? "border-[#6c63ff80] text-[#a78bfa] bg-[#6c63ff33]"
                                : "bg-[#ffffff0f] border-[#ffffff1a] text-[#9ca3b8]"
                            } 
                            hover:bg-[#6c63ff33] hover:border-[#6c63ff80] hover:text-[#a78bfa]`}>
                            {c}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default Categories;