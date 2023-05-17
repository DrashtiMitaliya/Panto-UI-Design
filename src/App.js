import './assets/scss/App.scss';
import Choose from './pages/Choose';
import Main from './pages/Main';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Main/>
      <Choose/> 
      <Product/>
    </div>
  );
}

export default App;
