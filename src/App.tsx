import Logo from './components/icons/LogoIcon'
import './App.css'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import {navTabOptions} from './constants/Constants'

function App() {
  const [origin, setOrigin] = useState({
    text: 'Hello, how are you?',
    lang: 'en',
    tabActive: 'en'
  })
  const [destination, setDestination] = useState({
    text: '',
    lang: 'fr',
    tabActive: 'fr'
  })
  const translate = (): void => {
    console.log('se busca de nuevo')
    console.log(origin.lang, destination.lang)

    if (origin.text != '' && origin.lang != '' && destination.lang != '') {
      if (origin.lang === destination.lang) {
        toast.error('PLEASE SELECT TWO DISTINCT LANGUAGES',
          {
            unstyled: true,
            position: 'top-right',
            classNames: {
              toast: 'flex w-auto p-4 bg-translate border-[#4D5562]  border-[1px] rounded-lg text-[#F9FAFB] font-bold text-xs'
            }

          }

        )

        return
      }
      fetch(`https://api.mymemory.translated.net/get?q=${origin.text}&langpair=${origin.lang}|${destination.lang}`)
        .then(response => response.json())
        .then(data => {
          setDestination({ ...destination, text: data.responseData.translatedText })
          console.log('pasa por aqui')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }


  useEffect(() => {
    translate()

  }, [origin, destination.lang])



  return (
    <div className='flex flex-col h-screen relative'>
      <img src="./img/hero_img.jpg" alt="Hero image" className='aspect-video fixed w-screen top-0 left-0 h-2/3 -z-10'/>

      <div className='absolute left-5 lg:left-[72px] md:left-[72px] right-5 lg:right-[72px] md:right-[72px] top-[96px] flex flex-col items-center gap-10'>
        <div><Logo /></div>
        <div className='grid grid-cols-1 mb-24 lg:mb-0 lg:grid-cols-2 w-full h-full gap-3 justify-items-center'>
          {/* Card Origin */}
          <Card navTabOptions={navTabOptions}
            dataOrigin={origin}
            dataDestination={destination}
            setData={{ setOrigin: setOrigin, setDestination: setDestination }}
            translate={translate}
          />
          {/* Card Destination */}
          <Card
            navTabOptions={navTabOptions}
            dataDestination={destination}
            dataOrigin={origin}
            cardOrigin={false}
            setData={{ setOrigin: setOrigin, setDestination: setDestination }}

          />
        </div>
      </div>

      <div className='bg-[#040711] fixed  w-screen bottom-0 left-0 h-1/3 -z-20'>

      </div>
      <Toaster />
    </div>


  )
}

export default App
