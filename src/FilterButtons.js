import React from 'react';

const FilterButtons = ({ carry, support }) => {
  return (
    <div className='fixed right-1/2 translate-x-1/2 flex justify-between top-full -translate-y-full w-64 lg:w-48 text-white z-10 lg:right-4 lg:top-6 lg:translate-y-0 lg:translate-x-0'>
      <div onClick={carry} className='filterButton group1 bg-gray-600 cursor-pointer'>Carry</div>
      <div onClick={support} className='filterButton group1 bg-purple-950 cursor-pointer'>Support</div>
    </div>
  );
};

export default FilterButtons;