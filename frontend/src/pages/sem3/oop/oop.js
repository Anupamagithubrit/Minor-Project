import React, { useState } from "react";

const Oop = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Object Oriented Programming</h1>
      <a href="/sem3/oop/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/AGrcyWV7hL8"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Oop;
