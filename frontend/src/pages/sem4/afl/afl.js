import React, { useState } from "react";

const Afl = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>AFL</h1>
      <a href="/sem4/afl/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/58N2N7zJGrQ"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Afl;
