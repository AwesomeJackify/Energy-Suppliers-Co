import React from 'react'
import Ticker from 'react-ticker'
import '../assets/css/videoFooter.css'

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooterText">
                <h3>{ channel }</h3>
                <p>{description}</p>
            </div>
            <div className="music">
                <img className="record" alt="record disc" src="https://download1349.mediafire.com/bvm6s1mm9clg/d4g2otztdwqiw3f/records-vinyl-png-image-transparent-stock-record-with-no-background-11562931421rntt7o9c6s-removebg-preview.png"/>
                <Ticker className="ticker" mode="smooth">
                    {({ index }) => (
                        <>
                            <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>
        </div>
    )
}

export default VideoFooter
