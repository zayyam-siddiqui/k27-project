import React from 'react';

const BlogCard = ({ title, date, excerpt, image, index }) => {
  return (
    <div className="group blog-card cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl h-[400px] mb-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/40 flex items-center justify-center">
          <h3 className="uppercase text-4xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold text-center">
            lire
          </h3>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-[font2] text-3xl uppercase text-white flex-1 pr-4 group-hover:text-[#d3fd50] transition-colors">
            {title}
          </h3>
          <span className="font-[font1] text-lg text-gray-400 whitespace-nowrap">
            {date}
          </span>
        </div>

        <p className="font-[font1] text-lg text-gray-300 line-clamp-3">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
