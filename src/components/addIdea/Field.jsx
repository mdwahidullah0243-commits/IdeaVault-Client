
const Field = ({ label, hint, error, children }) => {

    return (
        // fieldGroup
        <div className="flex flex-col gap-1.5">
            {/* label */}
            <label className="text-xs font-medium text-[#ffffff8c] tracking-[0.3px]">
                {label}
            </label>
            {/* hint */}
            {
                hint && <p className="text-xs text-[#ffffff40] -mt-0.5">{hint}</p>
            }

            {children}

            {/* errorMsg */}
            {
                error && <p className="text-xs text-[#E94560] mt-2">⚠ {error}</p>
            }
        </div>
    );
};

export default Field;