import React, { useState } from 'react';

const Seen = () => {
  const [isSeen, setIsSeen] = useState(false);

  const handleSeenToggle = () => {
    setIsSeen(!isSeen);
  };

  return (
    <div className='container' style={{ display: 'flex', alignItems: 'center' ,marginTop:'100px'}}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <p> {new Date().toLocaleDateString()}</p>
        <p style={{marginLeft:'50px'}}>Zeeshan Khalid</p>
        <p style={{marginLeft:'50px'}}>  Seen</p>
      </div>
      <button
        onClick={handleSeenToggle}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          marginLeft: '10px',
          border: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isSeen ? 'green' : 'white', 
        }}
      >
        {isSeen && <span>&#10003;</span>}
      </button>
    </div>
  );
};

export default Seen;
