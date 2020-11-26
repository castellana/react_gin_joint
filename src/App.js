import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import FooterNav from './components/FooterNav'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Events from './components/Events'


function App() {
  return (
   <main>
    <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact component={Home}/>
            {/* <Route path="/entertainment" component={Entertainment}/> */}
            <Route path="/shop" component={Shop}/>
            <Route path="/events/" component={Events}/>
            <Route path="/contact" component={Contact}/>
            {/* <Route path="*">
              <h1>404</h1>
            </Route> */}
        </Switch>
      </Router>
   
     <FooterNav />
     <Footer />
   </main>
  );
}
export default App;
