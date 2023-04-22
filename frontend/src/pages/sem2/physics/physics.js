import React, { useState } from "react";

const Physics = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Physics</h1>
      <a href="/sem2/physics/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://www.youtube.com/watch?v=EK_LTZncBjU&list=PLm_MSClsnwm_xDK55XxYkj3SHVkFsYsHm"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Physics;
