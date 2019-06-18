import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
          <Route path="/features" component={Features} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
