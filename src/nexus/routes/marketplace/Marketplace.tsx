import "./marketplace.css"
import monkeyImg from './spotify-monkey.png';

export default function NexusMarket() {
    return <div className="page">
        <div className="body mbody">
            <div className="left"></div>
            <div className="right"></div>
            <div className="main">
                <h2>All Modules</h2>
                <input type="text" />


                <div id="module-container">
                    <Module />
                    <Module />
                    <Module />
                    <Module />
                    <Module />
                    <Module />
                    <Module />
                </div>



            </div>

        </div>
    </div>
}


function Module() {
    return <div className="module">
        <div className="module-image-container">
            <img src={monkeyImg} />
        </div>
        <div className="module-desc-container">
            <h3>Spotify Monkey</h3>
        </div>

    </div>
}