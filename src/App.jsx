import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  const [darkMode,setDarkMode] =useState(false)

  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}> 
        <Header></Header>
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar></Sidebar>
            <MovieList></MovieList>
          </div>
        </main>
        <Footer></Footer>
        </div>
      </MovieContext.Provider>
        </ThemeContext.Provider>
    </>
  );
}

export default App;
