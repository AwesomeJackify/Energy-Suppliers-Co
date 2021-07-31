import './assets/css/app.css';
import Video from './components/Video.js';
import React, {useState, useEffect} from "react"
import axios from "./components/Axios.js"

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
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes}) => (
          <Video 
          url={url}
          channel = {channel}
          description = {description}
          song = {song}
          likes = {likes}/>
        ))}
      </div>
    </div>
  );
}

export default App;
