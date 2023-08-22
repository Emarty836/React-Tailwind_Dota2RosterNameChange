import React from 'react';

const ToggleButton = ({ onToggleOn, onToggleOff }) => {
  return (
    <div className='buttonSet'>
      <button onClick={onToggleOn} className='green'>ON</button>
      <button onClick={onToggleOff} className='red'>OFF</button>
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