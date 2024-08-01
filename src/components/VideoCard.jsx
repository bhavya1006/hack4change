import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="w-full p-2">
      <img src={video.thumbnail} alt={video.title} className="w-full rounded" />
      <h2 className="mt-2 text-sm font-bold">{video.title}</h2>
      <p className="text-xs text-gray-600">{video.channel}</p>
    </Link>
  );
};

export default VideoCard;
