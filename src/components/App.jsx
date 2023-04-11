import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './Videoplayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

const { useState } = React;
const { useEffect } = React;

var App = () => {

  //var videos = exampleVideoData;
  const [curVideo, setCurVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  const getVideos = (query) => {
    searchYouTube(query, (data) => {
      setCurVideo(data[0]);
      setVideoList(data);
    });
  };

  useEffect(() => {
    getVideos('cat');
  }, []);


  var selectVideo = function (videoObj) {
    setCurVideo(videoObj);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em><Search onChange={getVideos} /></em></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={curVideo} /></em></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos={videoList} handleClick={selectVideo} /></em></h5></div>
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
