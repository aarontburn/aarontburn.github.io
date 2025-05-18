import { useState } from "react";
import "./marketplace.css"
import monkeyImg from './spotify-monkey.png';
import { NexusDatabase } from "./db";

new NexusDatabase()

export default function NexusMarket() {
    const [searchQuery, setSearchQuery] = useState<string>()


    return <div className="page">
        <div className="body mbody">
            <div className="left"></div>
            <div className="right"></div>
            <div className="main">
                <h2>All Modules</h2>
                
                <input type="text" />


                <div id="module-container">
                    <Module
                        name="Debug Console"
                        shortDesc="Debug and view console outputs within Nexus."
                        author="aarontburn" />

                    <Module
                        name="Spotify Monkey"
                        author="aarontburn" />


                </div>

            </div>

        </div>
    </div>
}


interface ModuleProps {
    name: string;
    author: string;
    shortDesc?: string;
    image?: string;

}

function Module({ name, shortDesc, image, author }: ModuleProps) {
    return <div className="module">
        <div className="module-image-container">
            <img src={monkeyImg} />
        </div>
        <div className="module-info-container">
            <h3 className="module-info-name">{name}</h3>
            <h4>{author}</h4>
            {shortDesc && <h4>{shortDesc}</h4>}
        </div>

    </div>
}