import { NavItems } from "@/lib/data";
import NavItem from "../ui/NavItem";
import NavRightSide from "./NavRightSide";

const Navbar = () => {

    return (
        <div>
            {/* NAVBAR */}
            <nav className="flex justify-between items-center sticky top-0 z-50 bg-[#0b0d14d9] backdrop-blur-[20px] border-b border-[#ffffff0f] py-0 px-6 h-16">
                {/* Logo */}
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <div className="w-8.5 h-8.5 rounded-[10px] bg-linear-135 from-[#6C63FF] to-[#a855f7] flex items-center justify-center text-base">💡</div>
                    <span className="text-2xl font-extrabold tracking-[-0.03em] text-white">
                        Idea
                        <span className="text-[#6C63FF]">
                            Vault
                        </span>
                    </span>
                </div>

                {/* Nav Links - desktop */}
                <div className="flex items-center gap-2">
                    {
                        NavItems.map((item) => <NavItem key={item.id} item={item} />)
                    }
                </div>

                {/* Right side */}
                <NavRightSide />
            </nav>
        </div>
    );
};

export default Navbar;