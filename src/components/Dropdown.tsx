const TabClasses = 'p-2 rounded-xl text-sm font-bold cursor-pointer '
export default function Dropdown({ active, children, onClick }: { active?: boolean, children: React.ReactNode, onClick: (tab:string,newLang:string) => void }) {
    return (
        <select className={TabClasses + `${active ? 'bg-[#4D5562] text-[#F9FAFB]' : 'bg-transparent text-[#4D5562] '} `}
            onChange={(e)=>onClick('dropdown',e.target.value)}
        >
            {children}
        </select>
    )
}
