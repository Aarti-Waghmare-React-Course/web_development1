// Form Reset Without State
// Goal: Reset a form's values using only useRef.

import React, { useRef } from "react";

const ResetFormRef_10 = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleReset = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Reset Form with Ref</h2>
      <input ref={nameRef} type="text" placeholder="Name" /> <br /><br />
      <input ref={emailRef} type="email" placeholder="Email" /> <br /><br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ResetFormRef_10;
