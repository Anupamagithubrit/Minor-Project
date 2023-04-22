import React, { useState } from "react";

const Bee = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Basic Electrical Engineering</h1>
      <a href="/sem2/bee/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/2h7yeGJkYW4"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Bee;
