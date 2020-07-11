import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import key from './key';

const API = {
  key: key.API_KEY,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectVideo: null
    };

    this.videoSearch('CrossFit Workout');
  }

  videoSearch(searchTerm) {
    YTSearch({ key: key.API_KEY, term: searchTerm}, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
