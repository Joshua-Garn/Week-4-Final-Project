// `https://www.omdbapi.com/?apikey=da8288eb&s=${query}`
// `https://www.omdbapi.com/swagger.json`

const form = document.querySelector('form')
const movieListEl = document.querySelector('.movie-list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    query = form.querySelector('input').value
    getMovies(query)
})

function filterMovies(event) {
    sortMovies(event.target.value)
}

async function sortMovies(filter) {
    if (filter === "Latest-Movies") {
        movieData.Search.sort((a, b) => parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4)));
    } else if (filter === "Oldest-Movies") {
        movieData.Search.sort((a, b) => parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4)));
    }

    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");


}

async function getMovies() {
    const movies = await fetch
    (`https://www.omdbapi.com/?apikey=da8288eb&s=${query}`)
    movieData = await movies.json()

    console.log(movieData)

    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)
).join('')
}

function movieHTML(movie) {
    return ` <div class="movie-card">
              <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
                <div class="movie-card__container movie-disapear">
                  <img class="movie-poster" src="${movie.Poster}" alt="" />
                  <h3><b>${movie.Title}</b></h3>
                  <p>${movie.Year}</p>
                  <p></p>
                </div>
              </a>
            </div>`
}