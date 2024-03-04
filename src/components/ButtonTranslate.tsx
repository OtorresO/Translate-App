export default function ButtonTranslate({ children, onClick }: { children: React.ReactNode, onClick: (() => void) | undefined }) {

    return <button className="px-6 py-3 bg-[#3662E3] rounded-xl text-[#F9FAFB] font-semibold border-[1px] border-[#7CA9F3]"
        onClick={() => { if (onClick) onClick() }}
    >
        {children}
    </button>
}