import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderlist = videos.map(video => {
		return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        video={video}
      />
  	);
	});
  
  return (
    <div className="ui relaxed divided list">
      {renderlist}
    </div>
  );
};

export default VideoList;