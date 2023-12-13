import React from "react";
import trollFace from "./images/troll-face.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
                alt="Troll Face" 
                className="header--image"
            />
            <h2 className="header--title">MEME GENERATOR</h2>
            
        </header>
    );
}
