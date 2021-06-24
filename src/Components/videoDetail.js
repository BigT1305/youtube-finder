import React from 'react';

const VideoDetail = ({ video }) => {
	if(!video) {
		return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading...</div>
      </div>
    );
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
    <div>
      <div className="ui embed">
        <iframe src={url}
                allow="accelerometer; autoplay, encrypted-media; gyroscope; picture-in-picture"
                title={video.snippet.title}
                allowFullScreen>
        </iframe>
      </div>

      <div className="ui segment">
      <div className="content">
        <a href="{video.snippet.title}" className="header">
        {video.snippet.title}
        </a>
          <div className="description">{video.snippet.description}</div>
      </div>
    
      </div>
    </div>
	);
}

export default VideoDetail;