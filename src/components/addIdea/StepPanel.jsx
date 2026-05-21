
const StepPanel = ({ title, sub, children }) => {
    return (
        <div>
            {/* stepHeader */}
            <div className="mb-6">
                {/* stepTitle */}
                <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
                {/* stepSub */}
                <p className="text-sm text-[#ffffff59]">{sub}</p>
            </div>

            {/* fields */}
            <div className="flex flex-col gap-5">
                {children}
            </div>
        </div>
    );
};

export default StepPanel;