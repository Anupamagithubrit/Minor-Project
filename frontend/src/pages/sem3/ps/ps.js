import React, { useState } from "react";

const Ps = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Probability & Statistics</h1>
      <a
        href="https://docs.google.com/spreadsheets/d/12CyObWv1W8G5mN8uimbsupRTPuwhOi78Pwpt_KeqC6w/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Open Calculator Spreadsheet
      </a>
      <br />
      <a href="/sem3/ps/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/V3iEsLPAD68"
          allowFullScreen
        ></iframe>
      )}
      <br />
    </div>
  );
};

export default Ps;
