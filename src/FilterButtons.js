import React from 'react';

const FilterButtons = ({ carry, support }) => {
  return (
    <div className='filters'>
      <div onClick={carry} className='carryFilter'>Carry</div>
      <div onClick={support} className='supportFilter'>Support</div>
    </div>
  );
};

export default FilterButtons;