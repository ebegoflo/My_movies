import { Movie } from "./Movie.js";
import { getDetail } from "./MovieDetail.js";

let url = "http://www.omdbapi.com/?apikey=16f0c127";
let edpoint;
let allTheMovies;
const container = document.querySelector('.show_results');

const  makeSearch = title =>{
      let requestUrl = `${url}&s=${title}&type=movie`
      fetch(requestUrl)
      .then(response => response.json())  
      .then(results => getResults(results))   
      .catch(err => console.log('error', err)); 
}

const getResults = response => {
  console.log(response)
  let containerCounter = document.querySelector('.counter')
    containerCounter.innerHTML = 0; 
    container.innerHTML = ''
  if(response.Response == 'False'){
    containerCounter.innerHTML = 0;
    container.innerHTML = 'No encontramos resultados compatibles con tu búsqueda, vuelve a intentarlo'
    return;
  }

  allTheMovies = response.Search;
  
  containerCounter.innerHTML = allTheMovies.length; 

  let createListResults = response.Search.map( function(currentMovie,index){
    let objMovie = new Movie(currentMovie);
    let element = `<li class="movie">
            <img class= "poster" src="${objMovie.poster()}">
            <p class="title">${objMovie.getTitle()}</p>
            <p class="year">${objMovie.year()}</p>
      </li>`

      container.innerHTML += element
      listEvents();
  });
};

let listEvents = () => { 
  let elements = document.querySelectorAll('.movie');
  for (let i = 0; i < elements.length; i++) {
    const container = elements[i];
    container.addEventListener('click',() => createMovieDetail(event,i)); 
  }
}

let createMovieDetail = (e,i) =>{
  for (let index = 0; index < allTheMovies.length; index++) {
    if (index === i) {
      let focusMovie =  allTheMovies[index];
      // console.log(focusMovie)
      getDetail(focusMovie.imdbID);
      return focusMovie;
    }
    
  }
}

export {makeSearch}
