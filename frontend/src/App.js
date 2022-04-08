import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar'

function App() {
  return (
  <Router>
    <Navbar />
    {/* SideDrawer */}
    {/* BackDrop */}
    <main>
      <Routes>
        <Route exact path= "/" element={<HomeScreen />} />
        <Route exact path= "/product/:id" element={<ProductScreen />} />
        <Route exact path= "/cart" element={<CartScreen />} />
      </Routes>
    </main>
    {/* HomeScreen */}
    {/* ProductScreen */}
    {/* CartScreen */}
    </Router>
  );
}

export default App;
