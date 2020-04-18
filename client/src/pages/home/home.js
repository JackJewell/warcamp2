import React, {useContext} from "react";
import GlobalState from "../../utils/GlobalState"
import OneImg from "./1.jpg";
import TwoImg from "./2.jpg";
import ThreeImg from "./3.jpg";
import FourImg from "./4.jpg";
import FiveImg from "./5.jpg";
import SixImg from "./6.jpg";
import SevenImg from "./7.jpg";
import EightImg from "./8.jpg";
import NineImg from "./9.jpg";
import TenImg from "./10.jpg";

function Home(props){
    const globalState = useContext(GlobalState);
    return(
        <div>
            <h1>War Camp</h1>
            <hr></hr>
            <p>Welcome to War Camp, the website for Crownbreaker, the medieval fantasy war game</p>
            <div data-uk-slideshow="autoplay: true; autoplay-interval: 3000">
                <ul className="uk-slideshow-items">
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={OneImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={TwoImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={ThreeImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={FourImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={FiveImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={SixImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={SevenImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={EightImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={NineImg} alt="" data-uk-cover/>
                    </li>
                    <li className="uk-animation-kenburns uk-animation-reverse">
                        <img src={TenImg} alt="" data-uk-cover/>
                    </li>
                </ul>
            </div>
            <p>Using this website you can create lists for your armies, learn about the game, and the setting.</p>
            <a className="uk-button uk-button-default uk-width-1-3" href="/about">Learn About The Game</a>
            <a className="uk-button uk-button-default uk-width-1-3" href="https://www.worldanvil.com/w/caracklyst-jackjewell">Learn About The World</a>
            <a className="uk-button uk-button-default uk-width-1-3" href = "/newlist/buildList/new">Build a List</a>
        </div>
    )
}

export default Home;