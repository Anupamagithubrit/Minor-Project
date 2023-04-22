import React, { useState } from "react";

const Beelab = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Basic Electrical Engineering Laboratory</h1>
      <a href="/sem2/beelab/experiments">Experiments</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/BsOeyVBCa3g"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Beelab;
