import React from 'react'

const Video = () => {
    return (

        <div className='h-full w-full'>
       <video
                className='h-full w-full object-cover'
                autoPlay
                loop
                muted
                playsInline
                src="/videos/69496b2d.mp4"
            />

        </div>

    )
}

export default Video