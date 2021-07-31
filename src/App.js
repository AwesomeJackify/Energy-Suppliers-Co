import './assets/css/app.css';
import Video from './components/Video.js';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video url="https://download1077.mediafire.com/r1i6kjbvlrag/naufbowg5er1qzm/Jalen+Green+s+NBA+Inspiration+%F0%9F%92%AF+shorts_360P.mp4"
        channel="@Jalen Green"
        description="Inspirational speech about the NBA"
        song="Custom track by Jalen Green" likes={199}/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
