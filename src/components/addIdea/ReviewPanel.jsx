import Image from "next/image";
import StepPanel from "./StepPanel";


const ReviewPanel = ({ form }) => {
    const reviewSections = [
        { label: "Target Audience", valueue: form.audience },
        { label: "Problem Statement", value: form.problem },
        { label: "Proposed Solution", value: form.solution },
        form.detailedDesc && { label: "Detailed Description", value: form.detailedDesc },
    ];

    return (
        <StepPanel title="Review & publish" sub="Everything look good? Hit publish to share with the community.">
            {/* reviewCard */}
            <div className="bg-[#ffffff0d] rounded-xl border-[0.5px] border-[#ffffff1a] overflow-hidden mb-5">
                {
                    form.imageUrl && <Image src={form.imageUrl} alt="Preview" width={300} height={300} className="w-full h-40 object-cover block" onError={e => e.target.style.display = "none"} />
                }

                {/* reviewBody */}
                <div className="py-4 px-4.5">
                    {/* reviewMeta */}
                    <div className="flex gap-2 mb-2">
                        {/* reviewCategory */}
                        <span className="bg-[#e8b84b1f] text-[#e8b84b] text-xs font-medium py-1 px-2 rounded-sm tracking-[0.3px]">
                            {form.category}
                        </span>
                        {/* reviewBudget */}
                        {
                            form.budget && <span className="bg-[#ffffff12] text-[#ffffff66] text-xs py-1 px-2 rounded-sm">{form.budget}</span>
                        }
                    </div>

                    {/* reviewTitle */}
                    <h2 className="text-lg font-bold text-white mb-1.5">
                        {form.title || "—"}
                    </h2>
                    {/* reviewShort */}
                    <p className="text-sm text-[#ffffff73] leading-normal mb-2.5">
                        {form.shortDesc || "—"}
                    </p>
                    {
                        form.tags.length > 0 && (
                            // reviewTags
                            <div className="flex flex-wrap gap-1.5">
                                {
                                    form.tags.map(t => {
                                        return (
                                            // reviewTag
                                            <span key={t} className="text-xs text-[#ffffff4d] bg-[#ffffff0f] py-1 px-2 rounded-sm">
                                                #{t}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            {/* reviewSections */}
            <div className="flex flex-col gap-3.5">
                {
                    reviewSections.filter((r) => Boolean(r)).map(({ label, value }) => (
                        // reviewSection
                        <div key={label} className="border-l-2 border-[#e8b84b40] pl-3">
                            {/* reviewSectionLabel */}
                            <div className="text-xs font-medium tracking-[1px] uppercase text-[#e8b84b] mb-1 opacity-[0.7]">
                                {label}
                            </div>
                            {/* reviewSectionvalue */}
                            <p className="text-sm text-[#ffffff80] leading-[1.6]">{value || "—"}</p>
                        </div>
                    ))
                }
            </div>
        </StepPanel>
    );
};

export default ReviewPanel;