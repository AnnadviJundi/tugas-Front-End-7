import React, { useState } from 'react';  
import Footer from '../Components/Footer/Footer';  
import Hero from '../Components/Hero/Hero';  
import Movies from '../Components/Movies/Movies';  
import Navbar from '../Components/Navbar/Navbar';  
import AddMovie from '../Components/AddMovie/AddMovie';  
import DataMovie from '../utils/constans/DataMovie';  
  
function Main() {  
   
    const [item, setItem] = useState(DataMovie)  
    return(  
        <main>  
            <Hero />  
            <Movies item={item} setItem={setItem}/>  
            <AddMovie movies={item} setMovies={setItem}/>  
        </main>  
    )  
}  
  
const Home = () => {  
    return (  
        <>  
            <Navbar />  
            <Main />  
            <Footer />  
        </>  
    );  
}  
  
export default Home;
