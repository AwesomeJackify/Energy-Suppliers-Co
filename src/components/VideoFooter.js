import React from 'react'
import Ticker from 'react-ticker'
import '../assets/css/videoFooter.css'

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooterText">
                <h3>@jalengreen123</h3>
                <p>Jalen Green's inspiring speech</p>
            </div>
            <div className="music">
                <img className="record" alt="record disc" src="https://download1349.mediafire.com/7mlsqulbjr5g/d4g2otztdwqiw3f/records-vinyl-png-image-transparent-stock-record-with-no-background-11562931421rntt7o9c6s-removebg-preview.png"/>
                <Ticker className="ticker" mode="smooth">
                    {({ index }) => (
                        <>
                            <p>I am a song</p>
                        </>
                    )}
                </Ticker>
            </div>
        </div>
    )
}

export default VideoFooter
