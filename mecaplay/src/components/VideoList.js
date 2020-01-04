import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{

    render (props) {
        const renderedList = this.props.videoList.map((videoItem) => {
            return <VideoItem key={videoItem.id.videoId} video={videoItem} onVideoSelect={this.props.onVideoSelect} />
        });
        
        return <div className="ui relaxed divided list">{renderedList}</div>;
    }
}

export default VideoList;   