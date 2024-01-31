class MainApi {
    constructor({ baseUrl }) {
        // тело конструктора
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    register = (name, email, password) => {

        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            })
        })
            .then(this._checkResponse)
    }

    authorize = (email, password) => {

        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(this._checkResponse)
    }

    getToken = (token) => {

        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
                // "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }

    getProfile = () => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
                // "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }

    updateProfile = (name, email) => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
                // "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        })
            .then(this._checkResponse)
    }

    deleteLike(id) {
        const token = localStorage.getItem('token')
        return fetch(`${this._baseUrl}/movies/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkResponse)
        // .catch(console.log)
    }

    getSavedMovies() {
        const token = localStorage.getItem('token')
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
        })
        .then(this._checkResponse)
        // .catch(console.log)
    }

    addCard(country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
        owner) {
        const token = localStorage.getItem('token')
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                thumbnail,
                movieId,
                nameRU,
                nameEN,
                owner
            })
        })
            .then(this._checkResponse)
        // .catch(console.log)
    }

    deleteCard(id) {
        const token = localStorage.getItem('token')
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
        })
        .then(this._checkResponse)
        // .catch(console.log)
    }

}



export const mainApi = new MainApi({
    baseUrl: 'https://api.valery-gromov-diploma.nomoredomains.monster',
});