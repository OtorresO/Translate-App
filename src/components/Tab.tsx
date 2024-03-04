const TabClasses = 'p-2 rounded-xl text-sm font-bold cursor-pointer '

interface PropsTab {
    children?: React.ReactNode,
    active?: boolean | undefined,
    onClick: ((lang: string) => void),
    value: string
}
export default function Tab({ children, active = false, onClick, value }: PropsTab) {
    return <button className={TabClasses + `${active ? 'bg-[#4D5562] text-[#F9FAFB] ' : 'text-[#4D5562]'}`}
        onClick={() => onClick(value)}
    >
        {children}
    </button>
}