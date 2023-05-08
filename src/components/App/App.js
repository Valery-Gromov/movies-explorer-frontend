import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from '../Register/Register'
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<Movies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
