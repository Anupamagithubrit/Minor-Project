import React, { useState } from "react";

const Pcomm = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Professional Communication</h1>
      <a href="/sem1/pcomm/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://www.youtube.com/live/UudSwjqFdNM?feature=share"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Pcomm;
