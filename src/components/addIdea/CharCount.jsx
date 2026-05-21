

const CharCount = ({ value, max }) => {
    const pct = value / max;

    return (
        // charRow
        <div className="flex items-center gap-2 mt-1.25">
            {/* charBar */}
            <div className="flex-1 h-0.5 bg-[#ffffff12] rounded-xs overflow-hidden">
                {/* charFill */}
                <div className="h-full rounded-xs transition-all duration-200" style={{ width: `${Math.min(pct * 100, 100)}%`, background: pct > 0.9 ? "#E94560" : "#E8B84B" }} />
            </div>
            {/* charNum */}
            <span className="text-xs min-w-9 text-right" style={{ color: pct > 0.9 ? "#E94560" : "#ffffff40" }}>
                {value}/{max}
            </span>
        </div>
    );
};

export default CharCount;