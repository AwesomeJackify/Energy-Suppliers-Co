import './assets/css/app.css';
import Video from './components/Video.js';
import React, {useState, useEffect} from "react"
import axios from "./components/Axios.js"
import Header from "./components/Header.js";
import Timer from "./components/Timer.js";
import Navbar1 from './components/Navbar1.js';

function App() {
  const [videos, setVideos] = useState([]); 

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, [])

  return (
    <div className="background">
        <div className="app">
      <Header/>
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
      </div>
      <Navbar1 />
      <Timer />
    </div>
    </div>
    
  );
}

export default App;
