import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCZvX6toSO3zuyxjxtmGYRHvNKcC0h5ndE';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('caad12');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          {/* (1) onVideoSelect changes the global state, so other components can access it, such as VideoDetail */}
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// following onVideoSelect...
 // (1) in App, define it on VideoList props which sets the state
 // (2) VideoList takes that property and passes it into VideoListItem
 // (3) VideoListItem takes that property and says 'whenever I get clicked
 //     (onClick), call that function with thte video that I was passed.
 // *****In general, you don't want to go much beyond this many levels of passing
 //       down callbacks.


// Take this component's generated HTML and put it in the DOM
// 1) must wrap components up in < /> ... <App /> is an 'instance' of our App
// 2) the second parameter is the 'container' in our index.html where this React App is going to live


ReactDOM.render(<App />, document.querySelector('.container'));
