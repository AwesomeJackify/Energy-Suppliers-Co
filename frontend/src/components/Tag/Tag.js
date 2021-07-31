import React from 'react';
import './Tag.css';

const Tag = props => {
    return(
        <button className="tag" onClick={()=>props.cullTextFromTags(props.text)}>
            {props.text}
        </button>
    )
}

export default Tag;
