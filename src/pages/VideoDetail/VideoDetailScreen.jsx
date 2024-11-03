import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDetailScreen() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video Detail</h1>
      <p>Detailed view for video {id} coming soon...</p>
    </div>
  );
}

export default VideoDetailScreen;
