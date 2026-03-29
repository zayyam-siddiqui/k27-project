import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='text-white font-[font1] text-center pt-2'>
            <div className='uppercase text-[9.5vw] leading-[8.9vw] flex items-center justify-center '>The spark for</div>
            <div className='rounded-full overflow-hidden uppercase text-[9.5vw] leading-[8.9vw] flex items-center justify-center '>
                all
               <div className='h-[8vw] w-[17vw] rounded-full overflow-hidden -mt-3 '>
                    <Video/>
                </div>
                things
            </div>
            <div className='uppercase text-[9.5vw] leading-[8.9vw] flex items-center justify-center '>creative</div>
        </div>
    )
}

export default HomeHeroText