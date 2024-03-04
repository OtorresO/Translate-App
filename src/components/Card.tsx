import ButtonTranslate from './ButtonTranslate';
import Tab from './Tab';
import Dropdown from './Dropdown';
import ButtonArrow from './ButtonArrow';
import ButtonCopy from './ButtonCopy';
import ButtonPlayVoice from './ButtonPlayVoice';
import { MAX_WORD_TO_TRANSLATE } from '../constants/Constants'
interface Data {
    text: string,
    lang: string,
    tabActive: string
}
interface PropsCard {
    type?: number | undefined,
    navTabOptions: {
        options: Array<{ text: string, value: string }>,
        dropDownOptions: Array<{ text: string, value: string }>
    },
    cardOrigin?: boolean,
    dataOrigin: Data,
    dataDestination: Data,
    setData: {
        setOrigin: React.Dispatch<React.SetStateAction<
            {
                text: string,
                lang: string,
                tabActive: string
            }
        >>,
        setDestination: React.Dispatch<React.SetStateAction<
            {
                text: string,
                lang: string,
                tabActive: string
            }
        >>
    },
    translate?: () => void,
    /* text?: string | undefined,
    translatedText?: string | undefined,
    initialLanguage: string,
    langOrigin?: string | '',
    langDestination?: string | '',
    translate?: () => void,
    onCopy: (e: string) => void,
    setText?: ((e: string) => void),
    setTranslatedText?: React.Dispatch<React.SetStateAction<string>>,
    setLangOrigin?: React.Dispatch<React.SetStateAction<string>>,
    setLangDestination?: React.Dispatch<React.SetStateAction<string>> */
}
export default function Card({ navTabOptions, dataOrigin, dataDestination, cardOrigin = true, setData, translate/* text, translatedText, langOrigin, langDestination, setText, setTranslatedText, setLangOrigin, setLangDestination, initialLanguage, translate, onCopy */ }: PropsCard) {
    /* const [activeTab, setActiveTab] = useState(data.lang); */


    const onClickTab = (newLang: string) => {
        cardOrigin ? setData.setOrigin({ ...dataOrigin, lang: newLang, tabActive: newLang }) : setData.setDestination({ ...dataDestination, lang: newLang, tabActive: newLang })
    }

    const onClickDropDown = (tab: string, newLang: string) => {
        cardOrigin ? setData.setOrigin({ ...dataOrigin, lang: newLang, tabActive: tab }) : setData.setDestination({ ...dataDestination, lang: newLang, tabActive: tab })
    }




    const changeInfoToTranslate = () => {
        setData.setOrigin({ ...dataDestination })
        setData.setDestination({ ...dataOrigin })
    }

    return (
        <div className={`flex flex-col rounded-3xl w-full h-full pb-5 px-5 border-[#4D5562] border-[1px] gap-3 ${cardOrigin ? 'bg-translate' : 'bg-translated'}`}>
            <div className='flex justify-between gap-3 border-b-[1px] p-2 border-[#4D5562]'>
                <div>
                    {
                        navTabOptions.options.map(e => {
                            if (cardOrigin) {
                                return <Tab key={Math.random()} onClick={onClickTab} active={cardOrigin ? dataOrigin.tabActive == e.value : dataDestination.tabActive == e.value} value={e.value}>
                                    {e.text}
                                </Tab>
                            } else {
                                if (e.value == '') return null
                                return <Tab key={Math.random()} onClick={onClickTab} active={cardOrigin ? dataOrigin.tabActive == e.value : dataDestination.tabActive == e.value} value={e.value}>
                                    {e.text}
                                </Tab>
                            }

                        })
                    }

                    <Dropdown onClick={onClickDropDown} active={cardOrigin ? dataOrigin.tabActive === 'dropdown' : dataDestination.tabActive === 'dropdown'} >
                        {
                            navTabOptions.dropDownOptions.map(e => (
                                <option value={e.value} id="">{e.text}</option>
                            ))
                        }
                    </Dropdown>
                </div>


                {
                    cardOrigin ? null : <ButtonArrow onClick={changeInfoToTranslate} />
                }



            </div>
            <div>
                <textarea className='w-full h-40 min-h-40 
                focus-visible:outline-none text-[#F9FAFB] text-sm 
                font-bold bg-transparent resize-none'
                    value={cardOrigin ? dataOrigin.text : dataDestination.text}
                    readOnly={!(cardOrigin)}
                    onChange={e => { if (e.target.value.length <= 500) setData.setOrigin({ ...dataOrigin, text: e.target.value }) }}
                >
                </textarea>
                {
                    cardOrigin ? <span className='float-end text-[#4D5562] text-xs font-semibold'>{dataOrigin.text.length}/{MAX_WORD_TO_TRANSLATE}</span> :
                        null
                }
            </div>
            <div className={`flex justify-between items-center ${cardOrigin ? '' : 'mt-5'}`}>
                <div className='flex items-center gap-1'>
                    <ButtonPlayVoice lang={cardOrigin ? dataOrigin.lang : dataDestination.lang} text={cardOrigin ? dataOrigin.text : dataDestination.text} />
                    <ButtonCopy text={cardOrigin ? dataOrigin.text : dataDestination.text} />
                </div>
                {
                    cardOrigin ? <ButtonTranslate onClick={translate}>
                        <span className='underline mr-2'>A</span>Translate
                    </ButtonTranslate> : null
                }

            </div>
        </div>
    )
}
