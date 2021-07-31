import './assets/css/app.css';
import Video from './components/Video.js';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
