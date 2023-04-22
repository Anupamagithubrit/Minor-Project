import React, { useState } from "react";

const Chem = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      <h1>Chemistry</h1>
      <a href="/sem1/chem/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://www.youtube.com/embed/3O6OfCaVadI"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Chem;
