import StepPanel from './StepPanel';
import Field from './Field';
import Image from 'next/image';
import { useState } from 'react';
import { budgetRanges, tagSuggestions } from '@/lib/data';


const styles = {
    inputErr: { borderColor: "#E94560", background: "#e945600d" },
};

const DetailsPanel = ({ errors, form, set }) => {
    const [tagInput, setTagInput] = useState("");

    const removeTag = (t) => set("tags", form.tags.filter(x => x !== t));

    const addTag = (t) => {
        const tag = t.trim().toLowerCase().replace(/\s+/g, "-");
        if (tag && !form.tags.includes(tag) && form.tags.length < 8) {
            set("tags", [...form.tags, tag]);
        }

        setTagInput("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();

            addTag(tagInput);
        };
    };

    return (
        <StepPanel title="More details" sub="Help the community understand your scope.">
            <Field label="Tags" hint="Add up to 8 tags. Press Enter or comma to add." error={errors?.tags}>
                {/* tagWrap */}
                <div className='flex flex-wrap gap-1.5 bg-[#ffffff0a border-[0.5px] border-[#ffffff1f] rounded-lg py-2 px-2.5 min-h-10.5' style={{ ...(errors.tags ? styles.inputErr : {}) }}>
                    {
                        form.tags.map(t => (
                            // tagPill
                            <span key={t} className='flex items-center gap-1 bg-[#e8b84b1f] text-[#e8b84b] text-xs py-1 px-2 rounded-md font-medium'>
                                #{t}

                                {/* tagRemove */}
                                <button className='bg-none border-none text-[#e8b84b] cursor-pointer text-sm' onClick={() => removeTag(t)}>
                                    ×
                                </button>
                            </span>
                        ))
                    }

                    {
                        form.tags.length < 8 && (
                            // tagInput
                            <input name='tags' className='bg-none border-none text-white text-xs outline-none min-w-20 flex-1'
                                placeholder="type a tag..."
                                value={tagInput}
                                onChange={e => setTagInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onBlur={() => tagInput.trim() && addTag(tagInput)} />
                        )
                    }
                </div>

                {/* suggestRow */}
                <div className='flex flex-wrap gap-1.5 mt-1.5'>
                    {
                        tagSuggestions.filter(t => !form.tags.includes(t)).map(t => (
                            <button
                                key={t}
                                className='bg-none border-[0.5px] border-[#ffffff1a] text-[#ffffff4d] text-xs py-1 px-2 rounded-md cursor-pointer'
                                onClick={() => addTag(t)}>
                                + {t}
                            </button>
                        ))
                    }
                </div>
            </Field>

            <Field label="Cover Image URL" hint="Paste a direct image link" error={errors?.imageUrl}>
                <input
                    name='imageURL'
                    className={`w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-3 px-3 rounded-lg outline-none box-border`}
                    style={{ ...(errors.imageUrl ? styles.inputErr : {}) }}
                    placeholder="https://images.example.com/..."
                    type='url'
                    value={form.imageUrl}
                    onChange={e => set("imageUrl", e.target.value)}
                />

                {
                    form.imageUrl && (
                        // imgPreview
                        <div className='mt-2 rounded-[10px] overflow-hidden max-h-45 border-[0.5px] border-[#ffffff1a]'>
                            <Image
                                src={form.imageUrl} alt="preview"
                                width={300} height={300}
                                className='w-full object-cover block'
                                onError={e => { e.target.style.display = "none"; }} />
                        </div>
                    )
                }
            </Field>

            {/* Tow column field */}
            <div className='grid grid-cols-2 gap-4'>
                <Field label="Estimated Budget">
                    <select
                        name='budget'
                        className='w-full bg-[#ffffff0f] border border-[#ffffff1a] rounded-[10px] py-3 px-3 text-[#e8eaf0] text-sm outline-none'
                        value={form.budget}
                        onChange={e => set("budget", e.target.value)}>
                        <option value="" className='bg-[#1a1d2e]'>Select range</option>
                        {
                            budgetRanges.map(b => (
                                <option key={b} value={b} className='bg-[#1a1d2e]'>
                                    {b}
                                </option>
                            ))
                        }
                    </select>
                </Field>

                <Field label="Target Audience *" error={errors.audience}>
                    <input
                        name='audience'
                        className={`w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-3 px-3 rounded-lg outline-none box-border`}
                        style={{ ...(errors.audience ? styles.inputErr : {}) }}
                        placeholder="e.g. Freelancers in South Asia"
                        value={form.audience}
                        onChange={e => set("audience", e.target.value)} />
                </Field>
            </div>
        </StepPanel>
    );
};

export default DetailsPanel;