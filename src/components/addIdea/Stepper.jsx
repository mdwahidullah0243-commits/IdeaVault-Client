import { steps } from "@/lib/data";
import { FaCheck } from "react-icons/fa";

const styles = {
    stepActive: { border: `1.5px solid #e8b84b`, background: "#e8b84b1f" },
    stepDone: { background: '#e8b84b', border: `1.5px solid #e8b84b` },
    stepLine: { flex: 1, height: 1, background: "#ffffff1a", margin: "0 4px" },
    stepLineDone: { background: `#e8b84b88` },
    stepLabel: { position: "absolute", top: 36, left: "50%", transform: "translateX(-50%)", fontSize: 13, color: "#ffffff4d", whiteSpace: "nowrap", letterSpacing: "0.3px" },
    stepLabelActive: { color: '#e8b84b', fontWeight: 500 },
}

const Stepper = ({ step }) => {

    return (
        <div className='flex items-center mb-6'>
            {
                steps.map((label, i) => (
                    <div key={i} className='flex flex-row items-center flex-1 relative'>
                        <div
                            className={`w-8.5 h-8.5 rounded-[50%] border-[1.5px] border-[#ffffff26] flex items-center justify-center bg-[#ffffff0a] shrink-0 z-1`}
                            style={{ ...(i === step ? styles.stepActive : i < step ? styles.stepDone : {}) }}>
                            {
                                i < step
                                    ? <FaCheck className="text-[#242424]" />
                                    :
                                    <span className='text-xs font-medium text-[#ffffff66]'>
                                        {i + 1}
                                    </span>
                            }
                        </div>

                        {
                            i < steps.length - 1 && (
                                <div style={{ ...styles.stepLine, ...(i < step ? styles.stepLineDone : {}) }} />
                            )
                        }

                        <span style={{ ...styles.stepLabel, ...(i === step ? styles.stepLabelActive : {}) }}>
                            {label}
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default Stepper;