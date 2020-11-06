import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails'
import VideoList from './components/VideoList';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';



class App extends React.Component {
  state = {
    videos:[],
    selectedVideo:null
  }

  componentDidMount() {
    this.handleSubmit('sidhu moosewala');
  }
  
  onVideoSelect = (video)=> {
    this.setState({selectedVideo:video});
  }

  handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        q:searchTerm,
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyD6kCzRNbZ99zrzk0Brp8PyywIqUWpm5Eo"
      }
    })
    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
  }

  render() {
    return (
      <Grid container spacing = {10} style={{padding:"20px"}} >
        <h1 style={{marginLeft:"700px",
          fontFamily:'Caveat, cursive',
          color:"red"}} id="h1"> YouTube Clone </h1>
        <Grid item xs = {12}>
          <SearchBar onFormSubmit={this.handleSubmit}/>
          </Grid>
          <Grid item xs = {8}>
          <VideoDetails video = {this.state.selectedVideo}/>
            </Grid>
            <Grid item xs = {4}>
             <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
        </Grid>
    )
  }
}


export default App;