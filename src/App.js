
import { Route,Switch } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Login from "./containers/login/login";
import Auction from "./containers/auction/auction";
import Details from "./containers/details/details";
import Admin from "./containers/admin/admin";
import Layout from "./components/layout/Layout"

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Layout>
       <Switch>
       <Route path="/login" component={Login}/>
       <Route path="/admin" component={Admin}/>
       <Route path="/items/:id" component={Details}/>
       <Route path="/" exact component={Auction}/>
       </Switch>
      </Layout>

      </BrowserRouter>
    </div>
  );
}

export default App;
