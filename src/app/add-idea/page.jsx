'use client';

import Stepper from '@/components/addIdea/Stepper';
import BrandHeader from '@/components/addIdea/BrandHeader';
import { useState } from 'react';
import FormCard from '@/components/addIdea/FormCard';

const AddIdeaPage = () => {
    const [step, setStep] = useState(0);

    return (
        <div className={` bg-[#1A1A2E] min-h-screen text-white pb-15 relative overflow-hidden`}>
            <div className='fixed inset-0 pointer-events-none z-0' aria-hidden="true">
                {
                    [...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute h-70 rounded-[50%] bg-[#E8B84B] blur-[80px]'
                            style={{ left: `${[10, 60, 80, 30, 70, 5][i]}%`, top: `${[10, 5, 40, 70, 80, 55][i]}%`, width: `${[280, 180, 240, 200, 160, 300][i]}px`, opacity: 0.06 + i * 0.01 }} />
                    ))
                }
            </div>

            {/* Main Container */}
            <div className='relative z-1 max-w-180 mx-auto px-5'>
                {/* Header */}
                <BrandHeader />

                {/* Stepper */}
                <Stepper step={step} />

                {/* Form Card */}
                <FormCard step={step} setStep={setStep} />
            </div>
        </div>
    );
};

export default AddIdeaPage;