// `https://www.omdbapi.com/?apikey=da8288eb&s=${query}`
// `https://www.omdbapi.com/swagger.json`
const movieListEl = document.querySelector(".movie-list")
let moviesData = {}
let query = ""

async function main(){
    const movies = await fetch("https://www.omdbapi.com/?apikey=da8288eb&s=${}")
    const moviesData = await movies.json()
    movieListEl.innerHTML = moviesData.map((movie) => moviesHTML(movie)).join
}

main()

function showMovies(movie) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/movie.html`
}

function moviesHTML(movie) {
    return `<div class="movie-card">
        <div class="movie-card__container">
            <img src="#" alt="">
              <h3><b>Title: </b>Name</h3>
              <p><b>Released: </b>Date</p>
              <p><b>Rated: </b>Rating</p>
              <p><b>IMDB: </b><a href="https://imdb.com/title/${id}">IMDB</a></p>
        </div>
    </div>`
}