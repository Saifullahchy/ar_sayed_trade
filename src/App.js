import './App.css'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import productPage from './pages/product';
function App() {
  return (
    <Router >
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={productPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
