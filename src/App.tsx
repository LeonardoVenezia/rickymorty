import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchField from './components/SearchField';
import ShowResults from './components/ShowResults';
import { getCharactersByName } from './services/characters/characters';
// import Characters from './contexts/CharContext';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="characters/:name" element={<Characters />} />
  </Routes>
)

export default App;
