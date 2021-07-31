import './assets/css/app.css';
import Video from './components/Video.js';
import React, {useState, useEffect} from "react"
import axios from "./components/Axios.js"
<<<<<<< HEAD
import ProgressBar from 'react-bootstrap/ProgressBar'
=======
import Navbar from './components/Navbar.js';
import Header from "./components/Header.js";
>>>>>>> c09e2b790d9f464388c412c4795ca7b006e65ba6

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
          <Header/>
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
