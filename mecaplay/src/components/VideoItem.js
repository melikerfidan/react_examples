import './VideoItem.css'
import React from 'react';

class VideoItem extends React.Component{

    render (props) {     
        return (
            <div className="item video-item" onClick={() => {this.props.onVideoSelect(this.props.video)}}> 
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title} 
                    </div>
                    <div className="description">
                        {this.props.video.snippet.description} 
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;   