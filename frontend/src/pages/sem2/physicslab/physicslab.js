import React, { useState } from "react";

const Physicslab = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Physics Laboratory</h1>
      <a href="/sem2/physicslab/experiments">Experiments</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://www.youtube.com/watch?v=cEi-fT_KSIM&list=PLBW4he7ty4QCLxHLW5dU9ENQ-42JEdXG6"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Physicslab;
