import './App.css';
import Nav from './components/Nav'
import {Route,BrowserRouter as Router,Link} from 'react-router-dom'
import Design from './components/Design'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import store from './store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Router>
      <Provider store={store}>
      <Nav/>
      <Route path='/' exact component={Home} /> 
      <Route path='/about' exact component={About} /> 
      <Route path='/contact' exact component={Contact} /> 
     </Provider>
    </Router>
  );
}

export default App;
