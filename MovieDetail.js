import {whisList} from './app.js'

const container = document.querySelector('.my_movies');
let url = "http://www.omdbapi.com/?apikey=16f0c127";
let moviesList = [];
let movieId;

const  getDetail = idMovie =>{
    let requestUrl = `${url}&i=${idMovie}`;
    fetch(requestUrl)
    .then(response => response.json())  
    .then(detail => createTemplate(detail))  
    .catch(err => console.log('error', err)); 
}

function createTemplate(movie) {
  var listFavorites = JSON.parse(sessionStorage.getItem("movies"));
  if(listFavorites){
    moviesList = listFavorites;
  }
  let paintButton = validatePaintButton(movie);

  let description = `<div class="info" >
        <div class="relevant_info" > 
             <img class= "poster_detail" src="${movie.Poster}">
             <p class="movie_title">${movie.Title}</p>
             <p class="released">${movie.Released} - ${movie.Runtime}</p>
             <p class="genre">${movie.Genre}</p>
             <p class="rating_movie">${movie.imdbRating} IMDB Rating</p>
        </div>
        <div class="description" > 
            <p class="actors">  Starring ${movie.Actors}</p>
            <p class="plot"> ${movie.Plot}</p>
            <p class="directo">Directed by ${movie.Director}</p>
        </div>
        <ul>
        <li class="star">
            <i class= "fa fa-star">
         </li>
         <li class="star">
            <i class= "fa fa-star">
         </li>
           <li class="star">
          <i class= "fa fa-star">
          </li>
        <li class="star">
         <i class= "fa fa-star">
        </li>
        <li class="star">
          <i class= "fa fa-star">
        </li>
        </ul>
        ${paintButton ? '': `<button>Add to favorites</button>` }
      </div>`;

  container.innerHTML = description;
  let button = document.querySelector('button');
  // console.log(sessionStorage.getItem("movies"))
  button.addEventListener('click',() => addToWhishList(event,movie)); 
  
}

let rankingMovie = ()=>{

}

let addToWhishList = (e, movie) =>{
  if (moviesList.length == 0) {
    moviesList.push(movie)
    updateList();
  }

  if (validatePaintButton(movie)) {
    return;
  } else {
    moviesList.push(movie)
    updateList();
  }
}

let updateList = () =>{
  sessionStorage.setItem("movies", JSON.stringify(moviesList));
  whisList();
  
}
let validatePaintButton  = (movie)=>{
  let movieExist = moviesList.some(i => i.imdbID == movie.imdbID)
  return movieExist;
}



 export {getDetail}