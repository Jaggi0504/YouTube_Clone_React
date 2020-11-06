import React from 'react';
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = (props) => {
    const video = props.video;
    if(!video) return <div> Please Search a video first </div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h4" style={{fontFamily: 'Lobster, cursive'}}> {video.snippet.title} </Typography>
                <Typography variant="subtitle1" style={{fontFamily: 'Lobster, cursive'}}>{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1" style={{fontFamily: 'Lobster, cursive'}}>{video.snippet.description}</Typography>

            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;