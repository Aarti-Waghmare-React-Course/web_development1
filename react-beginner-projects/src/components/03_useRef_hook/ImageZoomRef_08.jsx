// 8: Image Zoom on Hover
// Goal: Use useRef to directly apply styles on hover, making an image zoom in when hovered and return to normal on mouse leave.

import React, { useRef } from "react";

const ImageZoomRef_08 = () => {
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1.2)";
      imgRef.current.style.transition = "transform 0.3s ease";
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Image Zoom on Hover</h2>
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Zoomable"
        style={{ width: "200px", height: "200px", cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ImageZoomRef_08;
