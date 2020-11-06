import React from 'react';
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';

const VideoList = (props) => {
    const {videos, onVideoSelect} = props;
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect = {onVideoSelect} key={id} video={video}/>)
    return (
        <Grid container spacing={10} style={{ padding: "10px" }}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;