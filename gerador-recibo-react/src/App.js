import logo from './logo.svg';
import './App.css';
import Header from './componentes/haeader/header';
import BodyRecibo from './componentes/body-recibo/bodyRecibo';
import Footer from './componentes/footer/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <BodyRecibo/>
      <Footer/>
    </div>
  );
}

export default App;
