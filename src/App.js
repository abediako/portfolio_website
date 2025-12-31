//react just changes the DOM (Document Object Model)/the content instead of reloading the whole page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/navbar'; //must import components to use them
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './styles/globals.css';

function App() {
  /*curely braces won't output objects or booleans directly */
  const projTitle = "Project 1";
  const views = 30;
  const link = "http://www.google.com";

  return (
      <Router>
        <div className="app">
        <Navbar /> {/* navigation bar will be shown on all pages */}
        <main className="content">
          <Routes> {/*which route matches the URL*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
    
      <Footer />
    </div>
    </Router>
  );
}

export default App;
