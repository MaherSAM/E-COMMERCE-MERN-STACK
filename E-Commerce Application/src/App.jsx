import { useSelector } from "react-redux";
import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';

const App = () => {
  const user = useSelector( state => state.user.currentUser );
  console.log( user );
  return (
    <Router>
    <div>
       <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={Product} />
          <Route path='/products/:category' component={ProductList} />
          <Route path='/login'>
            {user ? <Redirect to="/" /> : <Login/>}
            </Route>
          <Route path='/register' >
          {user ? <Redirect to="/" /> : <Register/>}
            </Route>
          <Route path='/pay' component={Pay} />
          <Route path='/success' component={Success} />
      </Switch>
    </div>
  </Router>
  );
};

export default App;