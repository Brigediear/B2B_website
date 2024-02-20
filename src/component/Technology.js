import React from 'react';

const Technology = () => {
  const technologies = [
    { name: 'Python', image: 'https://www.incentius.com/wp-content/uploads/2024/01/Group-122.png' },
    { name: 'AWS', image: 'https://www.incentius.com/wp-content/uploads/2024/01/Group-120.png' },
    { name: 'React JS', image: 'https://www.incentius.com/wp-content/uploads/2024/01/Group-119.png' },
    { name: 'Pandas', image: 'https://www.incentius.com/wp-content/uploads/2024/01/Group-117.png' },
    { name: 'Informatica', image: 'https://tse3.mm.bing.net/th?id=OIP.coiey5Yy7Lpo2n5L_68rogHaHa&pid=Api&P=0&h=180'},
  ];

  return (
    <div className="lazyblock-new-toolbox-XoGBI wp-block-lazyblock-new-toolbox">
      <div className="mt-8 md:mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 md:justify-start md:space-x-10">
        <hr className="border border-solid border-[#E2E2E2]" />
        <div style={{ marginLeft: '0px' }} className="py-10 md:py-20">
          <div className="grid md:grid-cols-1">
            <div className="text-2xl md:text-5xl font-bold text-white">
              <span className="bg-[#9DBE40]">Tech</span> <span className="text-[#212121]">Toolbox</span>
            </div>
          </div>
          <div className="grid text-sm md:text-lg mt-2 md:mt-3 md:grid-cols-1">
            <div>
              <span className="font-normal">Where Cutting-Edge Meets Capability - Our Tech Landscape</span>
            </div>
          </div>
          <div className="mt-8 px-4">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 md:gap-5 items-center justify-items-center">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center mb-8">
                  <img decoding="async" src={tech.image} alt={tech.name} className="max-h-20 mb-2" />
                  <div className="text-[#212121] text-sm text-center font-semibold">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <a href="/tech" className="inline-flex items-center gap-x-1.5 border cursor-pointer border-[#9DBE40] text-sm text-[#9DBE40] px-3 py-2 rounded-full font-semibold hover:text-[#9DBE40]">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="#9DBE40" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
                <span className="text-[#9DBE40]">50 more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
