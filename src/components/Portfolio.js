import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block text-accent text-2xl'>
            My latest work
          </h2>
          <p className='subtitle text-white'>
            Some complete Projects what i do recently! You can see it below!
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
