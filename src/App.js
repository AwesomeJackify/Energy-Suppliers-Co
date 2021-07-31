import './assets/css/app.css';
import Video from './components/Video.js';
import React, {useState} from "react"

function App() {
  const [videos, setVideos] = useState([]); 

  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get('/v2/posts')
      setVideos(response.data);

      return req;
    }

    fetchPosts();
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        
      </div>
    </div>
  );
}

export default App;
