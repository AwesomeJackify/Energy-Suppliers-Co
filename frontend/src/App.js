import './assets/css/app.css';
import Video from './components/Video.js';
import React, {useState, useEffect} from "react"
import axios from "./components/Axios.js"
import Navbar from './components/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  const [videos, setVideos] = useState([]); 
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);

      return response;
    }

    async function fetchProgress() {
      const response = await axios.get('/v2/progress')
      setProgress(response.data)

      return response;
    }

    fetchPosts();
    fetchProgress();
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video 
          key = {video.name}
          url={video.url}
          channel = {video.channel}
          description = {video.description}
          song = {video.song}
          likes = {video.likes}/>
        ))}

      <ProgressBar className="progressBar" animated now={progress.progress} />
      </div>

      <Navbar />
    </div>
  );
}

export default App;
