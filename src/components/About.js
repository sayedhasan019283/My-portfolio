import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block text-accent'>
                Sayed Hasan
              </h2>
              <p className='mb-4 text-accent'>
                Full Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 text-white'>
                I am a Full Stack Developer specialized in HTML5, CSS3, CSS Frameworks (Bootstrap5, Tailwindcss),
                JavaScript, React.js, Node.js, Express.js, MongoDB. I have the ability to collaborate effectively with senior
                developers. I am a quick learner and a good debugger. I am always trying to learn new technology. <br />
                <br />

              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all px-10 py-3 rounded-md ml-14 '>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
