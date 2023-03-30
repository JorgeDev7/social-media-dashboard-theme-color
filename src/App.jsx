import { useState } from 'react';
import CardSocial from './components/CardSocial';
import Overview from './components/Overview';

import imgs from './assets/images';
const {
  facebook,
  twitter,
  instagram,
  youtube,
  up,
  down
} = imgs

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkTheme = () => {
    setDarkMode(!darkMode);
  }

  if (darkMode === false) {
    document.querySelector('body').classList.add('bg-white')
    document.querySelector('body').classList.remove('bg-veryDarkBlueBG')
  } else {
    document.querySelector('body').classList.add('bg-veryDarkBlueBG')
    document.querySelector('body').classList.remove('bg-white')
  }

  return (
    <>

      <header className={`pt-5 ${darkMode ? 'bg-veryDarkBlueTopBG' : 'bg-veryPaleBlueTopBG'} pb-24 lg:pb-44 transition-colors`}>
        <div className="container mx-auto px-5 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="border-b lg:border-b-0 border-darkGrayishBlueText pb-4">
            <h1 className={`${darkMode ? 'text-white' : 'text-veryDarkBlueText'} font-bold text-2xl pb-1`}>Social Media Dashboard</h1>
            <p className={`${darkMode ? 'text-desaturatedBlueText' : 'text-darkGrayishBlueText'} font-bold`}>Total Followers: 23,004</p>
          </div>
          <div className="flex justify-between lg:gap-3 items-center pt-4 lg:pt-0">
            <p className={`${darkMode ? 'text-desaturatedBlueText' : 'text-darkGrayishBlueText'} font-bold`}>Dark Mode</p>
            <div
              className={`h-7 w-14 ${darkMode ? 'bg-gradient-to-r from-dark-theme-btn-gradient-1 to-dark-theme-btn-gradient-2' : 'bg-light-theme-btn'} hover:bg-gradient-to-r hover:from-dark-theme-btn-gradient-1 hover:to-dark-theme-btn-gradient-2 rounded-full relative flex justify-start items-center cursor-pointer`}
              onClick={handleDarkTheme}
            >
              <div className={`h-5 w-5 ml-1 rounded-full absolute ${darkMode ? 'translate-x-0 bg-veryDarkBlueText' : 'translate-x-7 bg-white'} transition`}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Followers and Subscribers section */}
      <div className="container mx-auto px-5">
        <main className='grid lg:grid-cols-4 gap-7 pt-10 -mt-24 lg:-mt-40'>
          <CardSocial
            img={facebook}
            user={'@nathanf'}
            followersNum={'1987'}
            followers={'Followers'}
            imgStonk={up}
            stonk={'12 Today'}
            border={'border-facebook'}
            colorStonk={'text-limeGreen'}
            darkMode={darkMode}
          />
          <CardSocial
            img={twitter}
            user={'@nathanf'}
            followersNum={'1044'}
            followers={'Followers'}
            imgStonk={up}
            stonk={'99 Today'}
            border={'border-twitter'}
            colorStonk={'text-limeGreen'}
            darkMode={darkMode}
          />

          <div className={`flex flex-col items-center gap-5 py-8 ${darkMode ? 'bg-darkDesaturatedBlueCardBG hover:bg-hoverBgDarkMode' : 'bg-lightGrayishBlueCardBG hover:bg-light-theme-btn'} rounded-md relative overflow-hidden transition-colors hover:cursor-pointer`}>
            {/* DIV used only for Instragram Card */}
            <div className=' bg-gradient-to-r from-instagram-gradient-1 to-instagram-gradient-2 h-1 w-full absolute top-0'></div>
            <div className='flex gap-3'>
              <img src={instagram} alt="Icon Instagram" />
              <p className={`${darkMode ? 'text-desaturatedBlueText' : 'text-darkGrayishBlueText'} font-bold`}>@realnathanf</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className={`text-6xl font-bold ${darkMode ? 'text-white' : 'text-veryDarkBlueText'}`}>11k</p>
              <p className={`${darkMode ? 'text-desaturatedBlueText' : 'text-darkGrayishBlueText'} font-normal tracking-custom uppercase`}>Followers</p>
            </div>
            <div className='flex items-center gap-1'>
              <img src={up} alt="icon stonk" />
              <p className='text-limeGreen font-bold'>1099 Today</p>
            </div>
          </div>

          <CardSocial
            img={youtube}
            user={'Nathan F.'}
            followersNum={'8239'}
            followers={'Subscribers'}
            imgStonk={down}
            stonk={'144 Today'}
            border={'border-youtube'}
            colorStonk={'text-brightRed'}
            darkMode={darkMode}
          />
        </main>
      </div>


      <section className='pt-16 mb-10'>
        <div className="container mx-auto px-5">
          <h2 className={`text-2xl ${darkMode ? 'text-white' : 'text-darkGrayishBlueText'} font-bold pb-8`}>Overview - Today</h2>

          <div className='grid lg:grid-cols-4 lg:grid-rows-2 gap-5'>

            <Overview
              title={'Page Views'}
              img={facebook}
              num={'87'}
              imgStonk={up}
              per={'3'}
              color={'text-limeGreen'}
              darkMode={darkMode}
            />

            <Overview
              title={'Likes'}
              img={facebook}
              num={'52'}
              imgStonk={down}
              per={'2'}
              color={'text-brightRed'}
              darkMode={darkMode}
            />

            <Overview
              title={'Likes'}
              img={instagram}
              num={'5462'}
              imgStonk={up}
              per={'2257'}
              color={'text-limeGreen'}
              darkMode={darkMode}
            />

            <Overview
              title={'Profile Views'}
              img={instagram}
              num={'52k'}
              imgStonk={up}
              per={'1375'}
              color={'text-limeGreen'}
              darkMode={darkMode}
            />

            <Overview
              title={'Retweets'}
              img={twitter}
              num={'117'}
              imgStonk={up}
              per={'303'}
              color={'text-limeGreen'}
              darkMode={darkMode}
            />

            <Overview
              title={'Likes'}
              img={twitter}
              num={'507'}
              imgStonk={up}
              per={'553'}
              color={'text-limeGreen'}
              darkMode={darkMode}
            />

            <Overview
              title={'Likes'}
              img={youtube}
              num={'107'}
              imgStonk={down}
              per={'19'}
              color={'text-brightRed'}
              darkMode={darkMode}
            />

            <Overview
              title={'Total Views'}
              img={youtube}
              num={'1407'}
              imgStonk={down}
              per={'12'}
              color={'text-brightRed'}
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

    </>
  )
}

export default App
