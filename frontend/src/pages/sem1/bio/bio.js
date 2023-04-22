import React, { useState } from "react";

const Bio = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      <h1>Biology</h1>
      <a href="/sem1/bio/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/bd-8bHjOJNk"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Bio;
