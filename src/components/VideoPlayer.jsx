import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="w-full">
      <video controls className="w-full">
        <source src={video.url} type="video/mp4" />
      </video>
      <h2 className="mt-2 text-xl font-bold">{video.title}</h2>
      <p className="text-sm text-gray-600">{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
