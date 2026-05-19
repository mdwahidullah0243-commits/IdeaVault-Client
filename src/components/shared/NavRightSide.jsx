import Link from "next/link";


const NavRightSide = () => {
    return (
        <div className="flex gap-2">
            <Link href={'/login'}>
                <button className="hover:border-[#6C63FF] hover:text-[#6C63FF] bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-2.5 px-5.5 text-base font-medium cursor-pointer transition-all duration-200">
                    Log in
                </button>
            </Link>

            <Link href={'/register'}>
                <button className="hover:-translate-y-0.5 hover:shadow-[0px_8px_24px] hover:shadow-[#6c63ff66] bg-linear-135 from-[#6C63FF] to-[#a855f7] text-white border-none rounded-[10px] py-2.5 px-5.5 text-base font-semibold cursor-pointer transition-all duration-200 tracking-[0.02em]">
                    Register
                </button>
            </Link>
        </div>
    );
};

export default NavRightSide;