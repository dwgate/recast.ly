class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //currentVideo needs to be replaced with some empty initial video
      currentVideo: this.props.exampleVideos[0],
      videoList: this.props.exampleVideos
    }

  }


  componentDidMount() {
    var safeSearch = _.debounce(this.props.search, 2000);

    // this.props.search({query: 'circa survive', max: 5, key: window.YOUTUBE_API_KEY}, this.handleSearch.bind(this));
    safeSearch({query: 'circa survive', max: 5, key: window.YOUTUBE_API_KEY}, this.handleSearch.bind(this));
  }

  handleUserInput(input) {
    var options = {
      query: input,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    this.props.search(options, this.handleSearch.bind(this));    


  }

  handleSearch(data) {
    this.setState({
      currentVideo: data.items[0],
      videoList: data.items
    });
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return(
      <div>
        <Nav handleSearch={this.handleUserInput.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} state={this.state} />
        </div>
        <div className="col-md-5">
          <VideoList titleClick={this.handleClick.bind(this)} videos={this.state.videoList} state={this.state} />
        </div>
      </div>
    ); 
  }

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
