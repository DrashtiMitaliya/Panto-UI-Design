import './assets/scss/App.scss';
import Footer from './components/common/Footer';
import Choose from './pages/Choose';
import Client from './pages/Client';
import Experience from './pages/Experience';
import Main from './pages/Main';
import Materials from './pages/Materials';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Main/>
      <Choose/> 
      <Product/>
      <Experience/>
      <Materials/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
