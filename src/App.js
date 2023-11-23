
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ErrorNotFound} from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Header/>
        
        <Routes>
          <Route exact path= "/" element={ <Home/> }/>
          <Route exact path= "/home" element={ <Home/> }/>
          <Route exact path= "/contact" element={ <Contact/> }/>
          <Route exact path="*" element={ <ErrorNotFound/> } />
        </Routes>
        
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
