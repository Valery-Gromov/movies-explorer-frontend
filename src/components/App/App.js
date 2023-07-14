import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Register from '../Register/Register'
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});
  const [cards, setCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      mainApi.getProfile()
        .then(userData => {
          setCurrentUserInfo(userData)
        })
        .catch(err => {
          console.log(err);
          localStorage.removeItem('token');
        });
    };
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      moviesApi.getMovies()
        .then(res => {
          setCards(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn])

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      mainApi.getSavedMovies()
        .then(res => {
          setSavedMovies(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn])

  const handleRegister = (name, email, password) => {
    return mainApi.register(name, email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLoginSubmit = (email, password) => {
    return mainApi.authorize(email, password)
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          navigate('/movies', { replace: true });
        }
      })
  };

  const handleEditSubmit = (name, email) => {
    return mainApi.updateProfile(name, email)
      .then(userData => {
        setCurrentUserInfo(userData);
      })
  };

  const checkToken = () => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      mainApi.getToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUserInfo(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

  const handleCardLike = (card) => {
    const isLiked = savedMovies.some(movie => movie.movieId === card.id);

    if (!isLiked) {
      const { country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN } = card;
      const cardImage = `https://api.nomoreparties.co/${card.image.url}`
      const thumbnail = `https://api.nomoreparties.co/${image.formats.thumbnail.url}`;
      const movieId = id.toString();

      mainApi.addCard(country, director, duration, year, description, cardImage, trailerLink, thumbnail, movieId, nameRU, nameEN)
        .then(newCard => {
          setSavedMovies([newCard, ...savedMovies]);
        })
        .catch(err => console.log(err));
    } else {
      const cardToDelete = savedMovies.find(c => {
        return c.movieId === card.id
      })
      deleteCard(cardToDelete);
    }
  };

  const deleteCard = (card) => {
    mainApi.deleteCard(card._id)
      .then(res => {
        setSavedMovies((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUserInfo}>
      <div className="App">
        <Header burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} loggedIn={loggedIn} />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/signin" element={<Login handleLoginSubmit={handleLoginSubmit} setLoggedIn={setLoggedIn} />} />
            <Route path="/signup" element={<Register handleRegister={handleRegister} setLoggedIn={setLoggedIn} />} />
            <Route
              path="/movies"
              element={<ProtectedRoute
                component={Movies}
                cards={cards}
                handleCardLike={handleCardLike}
                savedMovies={savedMovies}
              />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute
                component={SavedMovies}
                cards={savedMovies}
                deleteCard={deleteCard}
              />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute
                component={Profile}
                setLoggedIn={setLoggedIn}
                handleEditSubmit={handleEditSubmit}
              />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
