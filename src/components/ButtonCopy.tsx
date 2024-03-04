import { useState } from 'react';
import CopyIcon from './icons/CopyIcon';

export default function ButtonCopy({ text }: { text: string }) {
    const [active, setActive] = useState(false);
    const handleOnCopy = () => {
        setActive(true);
        setTimeout(() => {
            setActive(false);
            onCopy(text);
        }, 1000);
    }
    const onCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => { console.log('Copy') })
            .catch(e => console.log(e))
    }

    return (
        <div className={`relative p-2 border-2 border-[${active ? '#7CA9F3' : '#4D5562'}]  rounded-xl inline-block cursor-pointer mr-3`} onClick={handleOnCopy}>
            <CopyIcon active={active} />
            <div className={`absolute left-10 top-0 border-[#7CA9F3] p-1 border-[1px] text-[#F9FAFB]  font-medium text-xs rounded-lg transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`}>
                ¡Copied!
            </div>
        </div>
    )
}
