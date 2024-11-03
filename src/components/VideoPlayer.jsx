import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

function VideoPlayer({ video }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative h-full">
      <video
        src={video.url}
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 text-white text-shadow">
        <p className="text-lg font-semibold mb-2 md:text-xl">{video.description}</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <button className={`flex items-center ${liked ? 'text-red-500' : 'text-white'}`} onClick={handleLike}>
            <FaHeart className="text-2xl mr-2 md:text-3xl" />
            <span className="md:text-lg">{video.likes}</span>
          </button>
          <button className="flex items-center text-white">
            <FaComment className="text-2xl mr-2 md:text-3xl" />
            <span className="md:text-lg">{video.comments}</span>
          </button>
          <button className="flex items-center text-white">
            <FaShare className="text-2xl mr-2 md:text-3xl" />
            <span className="md:text-lg">{video.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
