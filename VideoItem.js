import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

const VideoItem = (props) => {
    const { video, onVideoSelect } = props;

    return (
        <Grid item xs={12} spacing={8} style={{ backgroundColor: "red", padding: "5px" }}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
                <img style={{ marginRight: "20px", padding: "10px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            </Paper>
            <Paper style={{padding:"10px", backgroundColor:"#101212"}}>
                <Typography variant="p" style={{ fontFamily: 'Lobster, cursive', color:"white" }}>{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;