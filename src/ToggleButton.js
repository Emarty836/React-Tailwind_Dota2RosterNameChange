import React from 'react';

const ToggleButton = ({ onToggleOn, onToggleOff }) => {
  return (
    <div className='w-28 h-12 bg-gray-600 flex justify-between fixed text-white font-sans z-1 mt-2 left-1/2 -translate-x-1/2'>
      <button onClick={onToggleOn} className='bg-green-800 hover:bg-green-900 h-12 w-12 cursor-pointer group'>ON</button>
      <button onClick={onToggleOff} className='bg-red-800 hover:bg-red-700 h-12 w-12 cursor-pointer group'>OFF</button>
    </div>
  );
};

export default ToggleButton;

// keep to use as reference on how to have buttons toggle ------------------------------


// import React, { useState } from 'react';

// const ToggleButton = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const handleClick = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>{isToggled ? <p>ROSTER CHANGE OFF</p> : <p>ROSTER CHANGE ON</p>}</button>
//     </div>
//   );
// };

// export default ToggleButton;