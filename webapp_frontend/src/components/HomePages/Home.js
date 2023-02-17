import "./Home.css"
//Logo Banner
import Navbar from "./Navbar";
//Footer
import Footer from "../Footer"

function Home() {

    return (
        <body>
        <Navbar></Navbar>
        <div>
        <div class="wrapper">
        <div class="card">
            <img>
            </img>
            <div class="descriptions">
                <h1>John Wick 3</h1>
                <p>
                    Movie description
                </p> 
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
        </div>
        <div class="card">
            <img></img>
            <div class="descriptions">
                <h1>Equalizer 2</h1>
                <p>
                </p>
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
        </div>
    </div>
        </div>
        <Footer></Footer>
        </body>
    )
}

export default Home;