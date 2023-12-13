// import React from 'react';

// const FilterButtons = ({ carry, support, healer }) => {
//   return (
//     <div className='fixed right-1/2 translate-x-1/2 flex justify-between top-full -translate-y-full w-72 lg:w-72 text-white z-10 lg:right-4 lg:top-6 lg:translate-y-0 lg:translate-x-0'>
//       <div onClick={carry} className='filterButton group1 bg-gray-600 cursor-pointer'>Carry</div>
//       <div onClick={support} className='filterButton group1 bg-purple-950 cursor-pointer'>Support</div>
//       <div onClick={healer} className='filterButton group1 bg-pink-600 cursor-pointer '>Healer</div>
//     </div>
//   );
// };

// export default FilterButtons;

import React from 'react';

const FilterButtons = ({ carry, support, healer, selectedCarry, selectedSupport, selectedHealer }) => {
  return (
    <div className='fixed right-1/2 translate-x-1/2 flex justify-between top-full -translate-y-full w-72 lg:w-72 text-white z-10 lg:right-4 lg:top-6 lg:translate-y-0 lg:translate-x-0'>
      <div
        onClick={carry}
        className={`filterButton group1 ${selectedCarry ? 'bg-gray-300 text-black' : 'bg-green-700 '} cursor-pointer`}
      >
        Carry
      </div>
      <div
        onClick={support}
        className={`filterButton group1 ${selectedSupport ? 'bg-gray-300 text-black' : 'bg-purple-950'} cursor-pointer`}
      >
        Support
      </div>
      <div
        onClick={healer}
        className={`filterButton group1 ${selectedHealer ? 'bg-gray-300 text-black' : 'bg-pink-600'} cursor-pointer`}
      >
        Healer
      </div>
    </div>
  );
};

export default FilterButtons;
