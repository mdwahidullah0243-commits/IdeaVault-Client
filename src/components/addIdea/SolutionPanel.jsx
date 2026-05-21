import Field from "./Field";
import StepPanel from "./StepPanel";

const styles = {
    inputErr: { borderColor: "#E94560", background: "#e945600d" },
};

const SolutionPanel = ({ errors, form, set }) => {

    return (
        <StepPanel title="The problem & solution" sub="This is the heart of your idea.">
            <Field label="Problem Statement *" error={errors.problem} hint="What pain does this solve? Who feels it?">
                <textarea name="problemStatement" className="w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-2.5 px-3 rounded-lg outline-none resize-y tracking-[1.6] box-border min-h-22.5"
                    style={{ ...(errors.problem ? styles.inputErr : {}) }}
                    placeholder="Describe the real problem your idea addresses..."
                    value={form.problem} onChange={e => set("problem", e.target.value)} />
            </Field>

            <Field label="Proposed Solution *" error={errors.solution} hint="How does your idea solve this? Be specific.">
                <textarea name="proposedSolution" className="w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-2.5 px-3 rounded-lg outline-none resize-y tracking-[1.6] box-border min-h-22.5"
                    style={{ ...(errors.solution ? styles.inputErr : {}) }}
                    placeholder="Walk us through your solution..."
                    value={form.solution} onChange={e => set("solution", e.target.value)} />
            </Field>

            <Field label="Detailed Description" error={errors.detailedDesc} hint="Expand on your idea — business model, tech stack, roadmap, etc.">
                <textarea name="detailedDesc" className="w-full bg-[#ffffff0d] border-[0.5px] border-[#ffffff1f] text-white text-sm py-2.5 px-3 rounded-lg outline-none resize-y tracking-[1.6] box-border min-h-22.5"
                    style={{ ...(errors.solution ? styles.inputErr : {}) }}
                    placeholder="Optional deeper dive into your idea..."
                    value={form.detailedDesc} onChange={e => set("detailedDesc", e.target.value)} />
            </Field>
        </StepPanel>
    );
};

export default SolutionPanel;