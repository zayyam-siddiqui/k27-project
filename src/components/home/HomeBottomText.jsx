import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
    return (
        <div
      className="font-[font2] flex items-center justify-center gap-4 pb-2 text-white"
    >
      <div className="bottomLine hover:border-[#D3FD50] hover:text-[#D3FD50] pt-2 h-25 border-3 flex items-center px-10 uppercase border-white rounded-full">
        <Link className="text-[6.8vw] mt-3 pt-3 pb-1" to="/projects">
          Work
        </Link>
      </div>
      <div className="bottomLine hover:border-[#D3FD50] hover:text-[#D3FD50] pt-2 h-25 border-3 flex items-center px-10 uppercase border-white rounded-full">
        <Link className="text-[6.8vw] mt-3 pt-2 pb-1" to="/agence">
          Agency
        </Link>
      </div>
    </div>
    )
}

export default HomeBottomText