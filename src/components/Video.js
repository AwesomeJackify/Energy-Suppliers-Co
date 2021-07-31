import React, { useRef, useState } from 'react'
import "../assets/css/video.css"

export default function Video() {
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
            <video className="video__player" loop preload="metadata" muted playsInline ref={videoRef} onClick={handleVideoPress} type="video/mp4" src={"https://download1077.mediafire.com/0z9h25lzceqg/naufbowg5er1qzm/Jalen+Green+s+NBA+Inspiration+%F0%9F%92%AF+shorts_360P.mp4" + thumbnail}>
                Your browser does not support video
            </video>
        </div>
    )
}
