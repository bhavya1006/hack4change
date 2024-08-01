import React from 'react';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import Comments from '../components/Comments';

const video = {
  id: '1',
  url: 'video1.mp4',
  title: 'Video 1',
  description: 'This is the description for Video 1',
};

const comments = [
  { id: '1', user: 'User 1', text: 'Great video!' },
  { id: '2', user: 'User 2', text: 'Thanks for sharing!' },
  // Add more comment objects
];

const VideoPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="w-full p-4">
          <VideoPlayer video={video} />
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
    