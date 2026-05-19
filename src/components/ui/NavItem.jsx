'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ item }) => {
    const pathname = usePathname();
    const isActive = pathname === item.path;

    return (
        <Link key={item.id} href={item.path}>
            <span className={`cursor-pointer py-2 px-3.5 rounded-lg text-base font-medium text-[#9ca3b8] transition-all duration-200 tracking-[0.01em] hover:bg-[#6c63ff26] hover:text-white 
                ${isActive ? "text-white bg-[#6c63ff26]" : ""}`}>
                {item.content}
            </span>
        </Link>
    );
};

export default NavItem;