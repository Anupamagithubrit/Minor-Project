import React, { useState } from "react";

const Aec = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      <h1>Analog Electronic Circuits</h1>
      <a href="/sem2/aec/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Aec;
