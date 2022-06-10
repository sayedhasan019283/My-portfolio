import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center '>
      <div className='mb-8 '>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <div className='max-h-96'>
        <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
        <h3 className='text-2xl font-semibold capitalize mb-3 text-white'>{item.name}</h3>
        <div>
          <p className='text-base max-w-md text-white'>
            {item.p}
          </p>
          <a href={item.link} target="_blank">
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all px-10 py-4 rounded-md mt-14">See Website</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
