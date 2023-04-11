import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './Videoplayer.js';

const { useState } = React;

var App = () => {
  const videos = exampleVideoData;
  const [curVideo, setCurVideo] = useState(videos[0]); // keep track of the current video in the video list

  const [videoList, setVideoList] = useState(videos);

  var selectVideo = function(videoObj) {
    setCurVideo(videoObj);
  };

  // setVideoList([...videoList, { contents: taskString, completed: false }])
  // const [title, setTitle] = useState(video.snippet.title);
  // const [description, setDescription] = useState(video.snippet.description);
  // const [img, setImg] = useState(video.snippet.thumbnails.default.url);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={curVideo}/></em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos={videoList} handleClick={selectVideo}/></em> view goes here</h5></div>
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
