export default function Overview({ title, img, num, imgStonk, per, color, darkMode }) {
    return (
        <div className={`flex flex-col gap-5 ${darkMode ? 'bg-darkDesaturatedBlueCardBG hover:bg-hoverBgDarkMode' : 'bg-lightGrayishBlueCardBG hover:bg-light-theme-btn'} rounded-md py-5 px-7  transition-colors hover:cursor-pointer`}>
            <div className='flex justify-between'>
                <p className={`${darkMode ? 'text-desaturatedBlueText' : 'text-darkGrayishBlueText'} font-bold`}>{title}</p>
                <img src={img} alt="icon social" />
            </div>
            <div className='flex justify-between'>
                <p className={`${darkMode ? 'text-white' : 'text-veryDarkBlueText'} font-bold text-3xl`}>{num}</p>
                <div className='flex items-center gap-1'>
                    <img src={imgStonk} alt="icon stonk" />
                    <p className={`${color} font-bold`}>{per}%</p>
                </div>
            </div>
        </div>
    )
}
