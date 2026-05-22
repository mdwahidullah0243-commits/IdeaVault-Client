import Categories from "@/components/ideas/Categories";
import { SearchField } from "@heroui/react";


const IdeasPage = () => {

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
            <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
                <Categories />

                <SearchField name="search">
                    <SearchField.Group className="bg-[#ffffff0f] border border-[#ffffff1a] text-[#e8eaf0]">
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-70" placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>

            {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 16 }}>
                {filtered.map((idea) => (
                    <div key={idea.id} className="idea-card">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                            <div className="tag-chip" style={{ background: `${idea.color}18`, color: idea.color, border: `1px solid ${idea.color}30` }}>{idea.category}</div>
                        </div>
                        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e8eaf0", lineHeight: 1.4, marginBottom: 12 }}>{idea.title}</h3>
                        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 16, lineHeight: 1.6 }}>An innovative approach to solving real-world problems through technology and community-driven solutions.</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div className="avatar" style={{ background: `${idea.color}25`, color: idea.color, width: 30, height: 30, fontSize: 11 }}>{idea.avatar}</div>
                                <span style={{ fontSize: 12, color: "#6b7280" }}>{idea.author}</span>
                            </div>
                            <div style={{ display: "flex", gap: 14 }}>
                                <span className={`stat-badge${likedIdeas[idea.id] ? " liked" : ""}`} onClick={() => toggleLike(idea.id)}>
                                    <span>{likedIdeas[idea.id] ? "▲" : "△"}</span>
                                    <span>{idea.votes + (likedIdeas[idea.id] ? 1 : 0)}</span>
                                </span>
                                <span className="stat-badge"><span>💬</span><span>{idea.comments}</span></span>
                            </div>
                        </div>
                    </div>
                ))}
                {filtered.length === 0 && (
                    <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 0", color: "#4b5563" }}>
                        <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                        <p>No ideas match your search.</p>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default IdeasPage;