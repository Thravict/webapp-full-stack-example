import {Carousel} from '3d-react-carousal';

import PeakyBlinder from "../assets/images/PeakyBlinders.jpg";
import Sandman from "../assets/images/Sandman.jpg";
import YouS4 from "../assets/images/You-S4.jpg";
import VikingsValhalla from "../assets/images/VikingsValhalla.jpg";
import Physical100 from "../assets/images/Physical100.jpg";

function SeriesSlider() {
let slides = [
    <img  src={PeakyBlinder} alt="1" />,
    <img  src={Sandman} alt="2" />  ,
    <img  src={YouS4} alt="3" />  ,
    <img  src={VikingsValhalla} alt="4" />  ,
    <img src={Physical100} alt="5" />   ];

const callback = function(index){
    console.log("callback",index);
}

    return (

<Carousel arrows={true} slides={slides} autoplay={false} interval={1000} onSlideChange={callback}/>
    )
}
export default SeriesSlider;