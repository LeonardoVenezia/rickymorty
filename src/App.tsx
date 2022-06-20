import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Favourites from './pages/Favourites/Favourites';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="characters/:name/:status" element={<Characters />} />
    <Route path="favourites" element={<Favourites />} />

  </Routes>
)

export default App;
