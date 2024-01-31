class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies = () => {
        return fetch(this._baseUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",

            }
        })
            .then(this._checkResponse)
    }


}


export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});