
import { Route,Switch } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Login from "./containers/login/login";
import Auction from "./containers/auction/auction";
import Details from "./containers/details/details";
import Admin from "./containers/admin/admin";
import Layout from "./components/layout/Layout"

import './App.css';
const items = [
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" ,price:10.2},
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg" ,price:15},
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg",price:8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" ,price:10.2},
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg" ,price:15},
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg",price:8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" ,price:10.2},
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg" ,price:15},
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg",price:8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" ,price:10.2},
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg" ,price:15},
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg",price:8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" ,price:10.2},
  { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg" ,price:15},
  { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg",price:8 },
  { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" ,price:10.2},
  

  
];
function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Layout>
       <Switch>
       <Route path="/login" component={Login} />
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
