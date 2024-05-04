import Navbar from './components/Navbar';
import Searchbox from './components/Searchbox';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';



function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Searchbox></Searchbox>
        <Product></Product>
        <About></About>
        <Contact></Contact>
      </div>
    )
}

export default App