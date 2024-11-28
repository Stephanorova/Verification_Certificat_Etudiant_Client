
import './App.css'
import Verifications from './Verification/Verifications';
import Footer from './footer/Footer';
import NaveBareTop from './NaveBareTop/NaveBareTop';
import NaveCenter from './NaveBareCenter/NaveCenter';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {





  return (
    <div className='App'>
    <BrowserRouter>
           <NaveCenter/>
           <NaveBareTop/>
           <Switch>
             <Route path = "/" exact component = {Verifications}/>
           </Switch>
           <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
