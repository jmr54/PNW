import './App.css';
import About from './pages/about'
import NavbarBrand from './pages/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer'
import Tabs from './pages/tabs'


function App() {
  return (
    <div className="App">
      <NavbarBrand/>
        <header className="App-header">
          <About/>
          <Tabs/>
        </header>
        <Footer/>
    </div>
  );
}

export default App;
