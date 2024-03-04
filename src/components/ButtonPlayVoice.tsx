import { useState } from 'react'
import SoundIcon from './icons/SoundIcon';
export default function ButtonPlayVoice({ text,lang }: { text: string,lang:string }) {
    const [active, setActive] = useState(false);
    const handleOnPlay = () => {
        setActive(true);
        setTimeout(() => {
            onPlay(text);
            setActive(false);
        }, 1000);
    }
    const onPlay = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        window.speechSynthesis.speak(utterance);
    }
    return (
        <div className={`p-2 border-2 border-[${active ? '#7CA9F3' : '#4D5562'}]  rounded-xl inline-block cursor-pointer mr-3`} onClick={handleOnPlay}>
            <SoundIcon active={active} />
            
        </div>
    )
}
