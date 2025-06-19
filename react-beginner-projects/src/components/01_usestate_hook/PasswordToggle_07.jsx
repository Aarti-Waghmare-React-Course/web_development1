// Show Password Toggle
// useState, input type toggle

import React, { useState } from 'react';

const PasswordToggle_07 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input type={show ? "text" : "password"} placeholder="Enter Password" />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Password
      </button>
    </div>
  );
};

export default PasswordToggle_07;
