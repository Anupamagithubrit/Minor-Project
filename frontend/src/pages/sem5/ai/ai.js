import React, { useState } from "react";

const Ai = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      <h1>Artificial Intelligence</h1>
      <a href="/sem5/ai/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Ai;
