import { useState } from "react";
import { formInfo } from "@/lib/data";
import BasicsPanel from "./BasicsPanel";
import CardFooter from "./CardFooter";
import DetailsPanel from "./DetailsPanel";
import SolutionPanel from "./SolutionPanel";
import ReviewPanel from "./ReviewPanel";

const FormCard = ({ step, setStep }) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState(formInfo);

    const set = (key, value) => {
        setForm(field => ({ ...field, [key]: value }));
        setErrors(e => ({ ...e, [key]: undefined }));
    };

    const validate = () => {
        const e = {};
        if (step === 0) {
            if (!form.title.trim()) e.title = "Required";
            if (!form.shortDesc.trim()) e.shortDesc = "Required";
            if (!form.category) e.category = "Pick a category";
        }

        if (step === 1) {
            if (!form.audience.trim()) e.audience = "Required";
            if (form.tags.length === 0) e.tags = 'Required';
            if (!form.imageUrl.trim()) e.imageUrl = 'Required';
        }

        if (step === 2) {
            if (!form.problem.trim()) e.problem = "Required";
            if (!form.solution.trim()) e.solution = "Required";
            if (!form.detailedDesc.trim()) e.detailedDesc = 'Required';
        }

        setErrors(e);

        const errorsKeys = Object.keys(e);

        return errorsKeys.length === 0;
    };

    const next = () => {
        if (validate()) {
            setStep(s => Math.min(s + 1, 3));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <div className="bg-[#ffffff0a] border-[0.5px] border-[#ffffff1a] rounded-2xl overflow-hidden mt-8">
            <form onSubmit={handleSubmit}>
                {/* Card Inner */}
                <div className="pt-7 px-7 pb-2">

                    {/* STEP: 0 — Basics */}
                    {
                        step === 0 && <BasicsPanel errors={errors} form={form} set={set} />
                    }

                    {/* STEP: 1 — Details */}
                    {
                        step === 1 && <DetailsPanel errors={errors} form={form} set={set} />
                    }

                    {/* STEP: 2 - Solution */}
                    {
                        step === 2 && <SolutionPanel errors={errors} form={form} set={set} />
                    }

                    {/* STEP: 3 — Review */}
                    {
                        step === 3 && <ReviewPanel form={form} />
                    }

                </div>

                {/* Footer Nav */}
                <CardFooter step={step} setStep={setStep} next={next} />
            </form>
        </div>
    );
};

export default FormCard;