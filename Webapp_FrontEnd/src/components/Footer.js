<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>

const Footer = () => {

    return (
        <footer 
        style={{
            backgroundColor:"black",
            position: "fixed",
            bottom: "0",
            width: "100%",
            height: "2.5rem",  
            fontFamily:"Montserrat"
        }}>
        <h4
        style={{
            color:"white",
            marginTop:"10px" 
        }}>
        Copyright © 2023. All rights reserved.
        </h4>
        </footer>
    )
}

export default Footer;