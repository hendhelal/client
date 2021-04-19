
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from "./containers/login/login";
import Auction from "./containers/auction/auction";
import Details from "./containers/details/details";
import Admin from "./containers/admin/admin";
import Layout from "./components/layout/Layout"
import './App.css';
import { AuthContext } from './context/authContext';
import { useCallback, useState, useEffect } from 'react';
import { authenticationService } from './auth/_services';
import { Role } from './auth/_helpers';
import { PrivateRoute } from './auth/privateRoute/privateRoute';
import NotFound from './components/notFound/notFound'
function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const login = useCallback((name, password) => {
    authenticationService.login(name, password)
      .then(
        user => {
          setIsLoggedIn(true);
        },
        error => {

        }
      );

  }, []);
  const logout = useCallback(() => {
    authenticationService.logout();
    setIsLoggedIn(false);
  }, []);
  useEffect(() => {
    authenticationService.currentUser.subscribe(x => {
      setCurrentUser(x);
      setIsAdmin(x && x.role === Role.Admin);
      if (x) {
        setIsLoggedIn(true);
      }


    }
    )
  });
  let routes;
  if (isLoggedIn) {
    routes = <Switch>
      <PrivateRoute path="/items/:id" component={Details} />
      <PrivateRoute exact path="/" component={Auction} />
      <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
    </Switch>

  }
  else {
    routes = <Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  }
  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn, login, logout, isAdmin }}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <PrivateRoute path="/items/:id" component={Details} />
              <PrivateRoute exact path="/" component={Auction} />
              <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
              {!isLoggedIn ? <Route path="/login" component={Login} /> : <Redirect to="/" exact />}
              <Route path='*' exact  component={NotFound} />
            </Switch>


          </Layout>

        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
