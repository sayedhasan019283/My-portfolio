import React from 'react';

// import woman image
import WomanImg from '../assets/img/photo1.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Sayed Hasan! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-white'>
              I Build  <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-white'>
              I can build a Ful stack project!
            </p>
            <div>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all px-10 py-3 rounded-md'>
                Hire Me
              </button>
              <a href='https://drive.google.com/file/d/1k_SeqBnG1hntURAGErZeq7muN-dcFnkN/view' target="_blank">
                <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all px-10 py-3 rounded-md ml-14">Download Resume</button>
              </a>
            </div>\
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
