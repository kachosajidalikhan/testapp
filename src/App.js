import './App.css';
import Home from './component/home/home';
import Nav from "./component/home/nav/nav";
import Footer from './component/home/footer/footer';

function App() {
  return (
    <div>     
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
