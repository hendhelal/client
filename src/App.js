
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Login from "./containers/login/login";
import Auction from "./containers/auction/auction";
import Details from "./containers/details/details";
import Admin from "./containers/admin/admin";
import Layout from "./components/layout/Layout"
import './App.css';
import { AuthContext } from './context/authContext';
import { useCallback, useContext, useState } from 'react';
const items = [
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg", price: 10.2 },
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg", price: 15 },
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg", price: 8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg", price: 10.2 },
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg", price: 15 },
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg", price: 8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg", price: 10.2 },
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg", price: 15 },
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg", price: 8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg", price: 10.2 },
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg", price: 15 },
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg", price: 8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg", price: 10.2 },
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg", price: 15 },
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg", price: 8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg", price: 10.2 },



];
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
let routes;
if(isLoggedIn)
{
  routes=<Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/items/:id" component={Details} />
              <Route path="/" exact component={Auction} />
              <Redirect to="/"/>
  </Switch>
}
else{
  routes=<Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login"/>
  </Switch>
}
  return (
    <div className="App">
      <AuthContext.Provider value={{isLoggedIn, login, logout}}>
        <BrowserRouter>
          <Layout>
         {routes}
          </Layout>

        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
