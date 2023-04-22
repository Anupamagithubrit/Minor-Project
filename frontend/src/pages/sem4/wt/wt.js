import React, { useState } from "react";

const Wt = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideo1, setShowVideo1] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  const handleYouTubeClick1 = () => {
    setShowVideo1(!showVideo1);
  };
  return (
    <div>
      <h1>Web Technology</h1>
      <a href="/sem4/wt/topicwisenotes">Topic Wise Notes</a>
      <br />
      {/* <a target="_blank" rel="noreferrer">
        Youtube Videos(HTML)
      </a>
      <br />
      <a target="_blank" rel="noreferrer">
        Youtube Videos(Java)
      </a>
      <br /> */}
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video(HTML)" : "Open Youtube Video(HTML)"}
      </a>
      <br />
      <a href="#" onClick={handleYouTubeClick1}>
        {showVideo1 ? "Close Youtube Video(Java)" : "Open Youtube Video(Java)"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/dD2EISBDjWM"
          allowFullScreen
        ></iframe>
      )}
      {showVideo1 && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/VHbSopMyc4M"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Wt;
