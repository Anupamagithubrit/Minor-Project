import React, { useState } from "react";

const Aeclab = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Analog Electronic Circuits Laboratory</h1>
      <a href="/sem2/aeclab/experiments">Experiments</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/Rn4dMWlWzdY"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Aeclab;
