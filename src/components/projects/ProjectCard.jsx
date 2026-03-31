import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <div className="group ml-2 w-1/2 h-full transition-all duration-350 relative hover:rounded-[40px] overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-104"
          src={image1}
          alt=""
        />
        <div className="opacity-0 transition-all duration-350 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/40 flex items-center justify-center">
          <h2 className="uppercase text-7xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
            vior le projet
          </h2>
        </div>
      </div>
      <div className="group mr-2 w-1/2 h-full transition-all duration-350 relative hover:rounded-[40px] overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-104"
          src={image2}
          alt=""
        />
        <div className="opacity-0 transition-all duration-350 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/40 flex items-center justify-center">
          <h2 className="uppercase text-7xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
            vior le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;