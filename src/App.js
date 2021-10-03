import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ServicesPart from './components/ServicesPart/ServicesPart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header></Header>
        <Switch>
          <Route path="/home">
            <ServicesPart></ServicesPart>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route exact path="/">
            <ServicesPart></ServicesPart>
          </Route>
          <Route path="*">
            <h1>404 , Page Not Found</h1>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
