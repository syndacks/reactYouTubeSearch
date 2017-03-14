import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        {/* (2) VideoList takes that property and passes it to VideoListItem */}
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        {/*aka this.props.video */}
        video ={video} />
      );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
