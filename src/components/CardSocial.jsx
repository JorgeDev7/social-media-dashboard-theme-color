export default function CardSocial({ img, user, followersNum, followers, imgStonk, stonk, border, colorStonk, darkMode }) {
    return (
        <div className={`flex flex-col items-center gap-5 py-8 ${darkMode ? 'bg-darkDesaturatedBlueCardBG hover:bg-hoverBgDarkMode' : 'bg-lightGrayishBlueCardBG hover:bg-light-theme-btn'} rounded-md border-t-4 ${border} transition-colors hover:cursor-pointer`}>
            <div className='flex gap-3'>
                <img src={img} alt="Icon social" />
                <p className={`${darkMode ? 'text-desaturatedBlueText' : 'text-darkGrayishBlueText'} font-bold`}>{user}</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className={`text-6xl font-bold ${darkMode ? 'text-white' : 'text-veryDarkBlueText'}`}>{followersNum}</p>
                <p className='text-darkGrayishBlueText font-normal tracking-custom uppercase'>{followers}</p>
            </div>
            <div className='flex items-center gap-1'>
                <img src={imgStonk} alt="icon stonk" />
                <p className={`${colorStonk} font-bold`}>{stonk}</p>
            </div>
        </div>
    )
}
