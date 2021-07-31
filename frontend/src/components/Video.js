import React, { useRef, useState } from 'react'
import "../assets/css/video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import Watermark from './Watermark';

export default function Video({url, channel, description, song, likes}) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        // If video is playing already, stop it and vice versa
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    const thumbnail = "#t=0.5"

    return (
        <div className="video">
            <video className="video__player" loop preload="metadata" muted playsInline ref={videoRef} onClick={handleVideoPress} type="video/mp4" src={url + thumbnail}>
                Your browser does not support video
            </video>

            <VideoSidebar  likes={likes}/>
            <VideoFooter channel={channel} description={description}song={song}/>

            <Watermark />
        </div>
    )
}
