import React, { useState } from "react";

const Pdc = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Principal Of Digital Communications</h1>
      <a href="/sem4/pdc/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/4NYt34yNWqU"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Pdc;
