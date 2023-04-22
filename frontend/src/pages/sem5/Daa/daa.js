import React, { useState } from "react";

const Daa = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Data algorithm and analysis</h1>
      <a href="/sem5/daa/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/u8JZ9gU5o4g"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Daa;
