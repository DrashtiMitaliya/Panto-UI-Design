// import "./assets/scss/App.scss";
import Main from './pages/MainSection/Main'
import Choose from "./pages/ChooseSection/Choose";
import Product from './pages/ProductSection/Product'
import Experience from './pages/ExperienceSection/Experience';
import Materials from './pages/MaterialSection/Materials';
import Client from './pages/ClientSection/Client';
import Footer from './components/common/Footer';


function App() {
  return (
    <>
      <Main/>
      <Choose />
      <Product/>
      <Experience />
      <Materials />
      <Client/>
      <Footer/>
    </>
  );
}

export default App;
