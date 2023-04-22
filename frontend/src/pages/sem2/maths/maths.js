import React, { useState } from "react";

const Maths = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Mathematics</h1>
      <a href="/sem2/maths/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/McOc6OUC7Pc"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Maths;
