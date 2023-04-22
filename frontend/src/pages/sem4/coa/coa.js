import React, { useState } from "react";

const Coa = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Computer Organization And Architecure</h1>
      <a href="/sem4/coa/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/Ol8D69VKX2k"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Coa;
