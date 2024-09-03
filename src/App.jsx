import './App.css'
import NavBar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ScrollingText from './About';
import AboutContent from './About-content';
import Tools from './tools';
import Tech from './Tech';
import Projects from './Projects';
import Footer from './Footer';

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <ScrollingText />
    <AboutContent />
    <Tools />
    <Tech />
    <Projects />
    <Footer />
    </>
  )
}

export default App;
