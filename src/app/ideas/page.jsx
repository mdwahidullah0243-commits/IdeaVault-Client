import IdeaCard from "@/components/ideas/IdeaCard";
import IdeaFilters from "@/components/ideas/IdeaFilters";


const IdeasPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
    const ideas = await res.json();
    console.log(ideas);

    return (
        <div className='w-11/12 mx-auto py-12 px-8'>
            <div className='mb-8'>
                <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">
                    Discover
                </h3>
                <h1 className='text-4xl font-extrabold tracking-[-0.02em] text-white mb-2'>
                    Browse All Ideas
                </h1>
                <p className='text-base text-[#6b7280]'>
                    Discover innovative startup concepts from our community
                </p>
            </div>

            {/* Filters */}
            <IdeaFilters />

            {/* All Ideas */}
            <div className="grid grid-cols-3 gap-5">
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea} />)
                }
            </div>

            {/* 
                <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 0", color: "#4b5563" }}>
                        <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                        <p>No ideas match your search.</p>
                </div>
            */}
        </div>
    );
};

export default IdeasPage;