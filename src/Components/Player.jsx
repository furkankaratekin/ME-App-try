// Player.jsx
import React, { useState } from "react";
import YouTube from "react-youtube";

const Player = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseVideo = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="text-center bg-gray-900 p-4">
      <div className="mb-4 mx-auto" style={{ maxWidth: "800px" }}>
        <YouTube
          videoId={videoId}
          opts={{ playerVars: { autoplay: 0 } }}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Player;
