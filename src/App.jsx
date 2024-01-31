import MovieList from "./cine/MovieList"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {
  
  return (
    <>


      <Header></Header>
      <main>
		<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
     <Sidebar></Sidebar>
     <MovieList></MovieList>
     
    </div>
   
   <Footer></Footer>
    </main>



    </>
  )
}

export default App
