import React, { useState } from "react";

const Hpc = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>High Perdormance Computing</h1>
      <a href="/sem5/hpc/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/79jKJvFAKuY"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Hpc;
