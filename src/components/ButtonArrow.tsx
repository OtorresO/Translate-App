import ArrowUpDownIcon from './icons/ArrowUpDownIcon'
export default function ButtonArrow({ onClick }: { onClick: () => void }) {
    return (
        <div className='flex items-center py-1 px-2 border-2 border-[#4D5562] rounded-xl text-sm  cursor-pointer ' onClick={() => onClick()}>
            <ArrowUpDownIcon />
        </div>

    )
}
