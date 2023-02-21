import "./Home.css"
//Logo Banner
import Navbar from "./Navbar";
//Footer
import Footer from "../Footer"
import SeriesSlider from "../HomePages/SeriesSlider";
import MovieSlider from "../HomePages/MovieSlider";

function Home() {

    return (
        <body>
        <Navbar/>

        <div className="Series">
        <div className="Slider-Title">top 10 <br/> netflix series</div>
        <div className="Carousel">
        <SeriesSlider/>
        </div>
        </div>

        <div className="Series">
        <div className="Slider-Title">top 10 <br/> netflix movies</div>
        <div className="Carousel">
        <MovieSlider/>
        </div>
        </div>
        <Footer/>
        </body>
    )
}

export default Home;