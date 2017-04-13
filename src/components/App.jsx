class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentVideo: this.props.exampleVideos[0],
      videoList: this.props.exampleVideos
    }

  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return(
      <div>
        <Nav />
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
