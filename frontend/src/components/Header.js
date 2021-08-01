import React, { useState } from "react";
import "../assets/css/header.css";
import ReactDOM from "react-dom";
import Tag from './Tag/Tag';

function Header() {
    const [tags, setTags] = useState([]);
    const tagInput = React.createRef();
    const pushTextToTags = inputText => {
        let newTagElement;
        if (inputText[inputText.length-1]===' '){
            if (tags.includes(inputText)){
                console.log("hi");
            }
            newTagElement = inputText.slice(0,(inputText.length-1))
            tagInput.current.value = '';
            setTags([...tags, newTagElement]);
            if (tags.length===2){
                document.getElementById("userInput").style.visibility = "hidden";
            }
            
        }
    }

    const cullTextFromTags = textToRemove => {
        setTags(tags.filter(index => index !== textToRemove));
        if (tags.length===3){
            document.getElementById("userInput").style.visibility = "visible";
        }
    }


    return (
        <div className = "header">
            <div className = "box">
                <div className="header__tagArea">
                    <div className= "header__tagArea--tagContainer">
                        {
                            tags.map((tag,index)=>(<Tag key={index} text={tag} cullTextFromTags={cullTextFromTags}/>))
                        }
                    </div>
                    <input className = "userInput" placeholder="Tags" ref={tagInput} type = "text" id="userInput" onChange={event=>pushTextToTags(event.target.value)}/>
                </div>
            </div>
                
        </div>
    );
}


ReactDOM.render(<Header/>, document.getElementById('root'));
export default Header

