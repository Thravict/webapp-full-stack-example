import "./Home.css"
//Logo Banner
import Navbar from "./Navbar";

import Movies from "../HomePages/Movies"
//Footer
import Footer from "../Footer"

function Home() {

    return (
        <body>
        <Navbar/>
        <div>
        <Movies/>
        </div>
        <Footer/>
        </body>
    )
}

export default Home;