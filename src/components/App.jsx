class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentVideo: null,
      videoList: []
    }

  }

  render() {
    return(
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.exampleVideos[0]} state={this.state} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.exampleVideos} state={this.state} />
        </div>
      </div>
    ); 
  }

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
