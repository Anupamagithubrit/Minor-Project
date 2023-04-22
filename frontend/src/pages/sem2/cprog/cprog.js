import React, { useState } from "react";

const Cprog = () => {
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
      <h1>C Programming</h1>
      <a href="/sem2/cprog/experiments">Experiments</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo
          ? "Close Youtube Video(Theory)"
          : "Open Youtube Video(Theory)"}
      </a>
      <br />
      <a href="#" onClick={handleYouTubeClick1}>
        {showVideo1
          ? "Close Youtube Video(Practical)"
          : "Open Youtube Video(Practical)"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/EjavYOFoJJ0"
          allowFullScreen
        ></iframe>
      )}
      {showVideo1 && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/irqbmMNs2Bo"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Cprog;
