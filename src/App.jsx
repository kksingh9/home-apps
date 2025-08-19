import CategoryGrid from "./components/categories"
import Header from "./components/header"
import Navbar from "./components/navigationbar"
import HeroSlider from "./components/slider"


function App() {


  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <Header/>
      <Navbar/>
      <HeroSlider/>
      <CategoryGrid/>
    </div>
  )
}

export default App
