import arrow_btn from '../assets/arrow_btn.png'
import play_icon from '../assets/play_icon.png'
import pause_icon from '../assets/pause_icon.png'

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
  return (
    <div className="mt-24 mb-0 ml-28 mr-28">
        <div className="text-slate-200 text-7xl font-semibold leading-[130px]">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="flex items-center gap-3 w-60 h-14 mt-6 py-1 px-2 pl-3 rounded-[60px] bg-white cursor-pointer">
            <p className='text-black text-base font-medium'>Explore the features</p>
            <img src={arrow_btn} alt="arrow" className='w-12 h-12' />
        </div>
        <div className="hero-dot-play mt-20 flex justify-between">
            <ul className="hero-dots flex items-center gap-[23px] list-none">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"w-4 h-4 rounded-lg cursor-pointer bg-orange-600":"w-4 h-4 bg-[#FFF] rounded-lg cursor-pointer"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"w-4 h-4 rounded-lg cursor-pointer bg-orange-600":"w-4 h-4 bg-[#FFF] rounded-lg cursor-pointer"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"w-4 h-4 rounded-lg cursor-pointer bg-orange-600":"w-4 h-4 bg-[#FFF] rounded-lg cursor-pointer"}></li>
            </ul>
            <div className="flex items-center gap-7">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="videoPlay" className='cursor-pointer' />
                <p className='text-white text-lg'>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero