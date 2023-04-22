import React, { useState } from "react";

const Dec = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Digital Electronics</h1>
      <a href="/sem3/dec/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/M0mx8S05v60"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Dec;
