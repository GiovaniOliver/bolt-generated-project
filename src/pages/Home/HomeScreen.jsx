import React, { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import { sampleVideos } from '../../mockData';

function HomeScreen() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % sampleVideos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + sampleVideos.length) % sampleVideos.length);
  };

  return (
    <div className="relative h-full">
      <VideoPlayer video={sampleVideos[currentVideoIndex]} />
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full md:p-4"
        onClick={handlePrevVideo}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full md:p-4"
        onClick={handleNextVideo}
      >
        &#9654;
      </button>
    </div>
  );
}

export default HomeScreen;
