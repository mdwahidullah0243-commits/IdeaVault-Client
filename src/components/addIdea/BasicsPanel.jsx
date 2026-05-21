import { categories } from "@/lib/data";
import CharCount from "./CharCount";
import Field from "./Field";
import StepPanel from "./StepPanel";

const styles = {
    inputErr: { borderColor: "#E94560", background: "#e945600d" },
};

const BasicsPanel = ({ errors, form, set }) => {

    return (
        <StepPanel title="The basics" sub="Start with what your idea is about.">
            <Field label="Idea Title *" error={errors?.title}>
                <input
                    name="ideaTitle"
                    className={`w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-3 px-3 rounded-lg outline-none box-border`}
                    style={{ ...(errors.title ? styles.inputErr : {}) }}
                    placeholder="e.g. AI-powered code reviewer for junior devs"
                    value={form.title}
                    onChange={event => set("title", event.target.value)}
                    maxLength={80}
                />
                <CharCount value={form.title.length} max={80} />
            </Field>

            <Field label="Short Description *" error={errors?.shortDesc} hint="One punchy sentence. This shows in feed previews.">
                <input
                    name="shortDesc"
                    className={`w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-3 px-3 rounded-lg outline-none box-border`}
                    style={{ ...(errors.shortDesc ? styles.inputErr : {}) }}
                    placeholder="What is this, in one sentence?"
                    value={form.shortDesc}
                    onChange={e => set("shortDesc", e.target.value)} maxLength={140}
                />
                <CharCount value={form.shortDesc.length} max={140} />
            </Field>

            <Field label="Category *" error={errors?.category}>
                <select
                    name="category"
                    className="w-full bg-[#ffffff0f] border border-[#ffffff1a] rounded-[10px] py-3 px-3 text-[#e8eaf0] text-sm outline-none"
                    style={{ ...(errors.category ? styles.inputErr : {}) }}
                    value={form.category}
                    onChange={e => set('category', e.target.value)}>
                    {
                        categories.map((c) => {
                            return (
                                <option key={c} value={c} className="bg-[#1a1d2e]">
                                    {c}
                                </option>
                            )
                        })
                    }
                </select>
            </Field>
        </StepPanel>
    );
};

export default BasicsPanel;