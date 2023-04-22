import React, { useState } from "react";

const Dbms = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleYouTubeClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <h1>Database Management System</h1>
      <a href="/sem4/dbms/topicwisenotes">Topic Wise Notes</a>
      <br />
      <a href="#" onClick={handleYouTubeClick}>
        {showVideo ? "Close Youtube Video" : "Open Youtube Video"}
      </a>
      <br />
      {showVideo && (
        <iframe
          width={450}
          height={225}
          src="https://youtu.be/kBdlM6hNDAE"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Dbms;
