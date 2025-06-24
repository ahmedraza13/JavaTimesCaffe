import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/herosection/HeroSection";
import banner from '../assets/images/banner.png'
import { Box } from "@mui/material";

function Home() {
    return (
        <>
       <Header/>
       <Box
      sx={{
        backgroundImage: `url(${banner})`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // full height of screen
      }}
    >
       <Navbar/>
       {/* <HeroSection/> */}
       </Box>
       </>
    )
}

export default Home;