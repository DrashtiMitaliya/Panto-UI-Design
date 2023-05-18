import './assets/scss/App.scss';
import Choose from './pages/Choose';
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
    </div>
  );
}

export default App;
