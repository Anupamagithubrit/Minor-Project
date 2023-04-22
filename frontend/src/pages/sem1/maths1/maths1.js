import React, { useState } from "react";

const Maths1 = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Mathematics</h1>
      <a href="/sem1/maths1/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/eTp5wq-cSXY"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Maths1;
