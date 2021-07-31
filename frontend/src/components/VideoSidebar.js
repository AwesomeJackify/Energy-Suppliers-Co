import React, {useState} from 'react'
import "../assets/css/videoSidebar.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({likes}) {
    const [liked, setLiked] = useState(false);

    const likeToggle = () => {
        if (liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
    }

    return (
        <div className="videoSidebar">
            <IconButton>
                {
                liked ? (
                <FavoriteIcon onClick={(e) => likeToggle()} fontSize="large" style={{fill: "#e60532"}}/>
                ) : (<FavoriteBorderIcon onClick={(e) => likeToggle()} fontSize="large" style={{fill: "white"}}/>)
                }
            </IconButton>
            { 
            liked ? (<p>{likes + 1}</p>) : (<p>{likes}</p>) 
            }
            
        </div>
    )
}

export default VideoSidebar
