import React, { useState } from "react";

function ToggleImage({ img1, img2, alt = "image" }) {
  const [showFirst, setShowFirst] = useState(true);

  const handleClick = () => {
    setShowFirst(!showFirst);
  };

  return (
    <img
      src={showFirst ? img1 : img2}
      alt={alt}
      onClick={handleClick}
      style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
    />
  );
}

export default ToggleImage;
