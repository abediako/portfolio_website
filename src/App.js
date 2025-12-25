import Home from "./pages/Home";
import Navbar from './components/navbar'; //must import components to use them
import Hero from './components/Hero';

function App() {
  /*curely braces won't output objects or booleans directly */
  const projTitle = "Project 1";
  const views = 30;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar /> {/* show components */}
     <div className="content"></div>
      <Hero />
      <h1>{projTitle}</h1> {/* curly braces allow for dynamic content insertion (templates) */}
      <p>Number of views: {views}</p>

      <p>{10}</p>
      <p>"hello world"</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{ Math.random() * 10 }</p>

      <a href = {link}>Google</a>
    </div>
  );
}

export default App;
