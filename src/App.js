import './App.css'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import ContactusPage from './pages/contactUs';
function App() {
  return (
    <Router >
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contactus" component={ContactusPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
