import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';

const videos = [
  { id: '1', thumbnail: 'video1.jpg', title: 'Video 1', channel: 'Channel 1' },
  { id: '2', thumbnail: 'video2.jpg', title: 'Video 2', channel: 'Channel 2' },
  { id: '3', thumbnail: 'video3.jpg', title: 'Video 3', channel: 'Channel 3' },
  // Add more video objects
];

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
};

export default HomePage;
