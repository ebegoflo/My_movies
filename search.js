import { Movie } from "./Movie.js";
import { getDetail } from "./MovieDetail.js";

let url = "http://www.omdbapi.com/?apikey=16f0c127";
let edpoint;
let allTheMovies;
const container = document.querySelector('.show_results');

// document.querySelector('.movie').addEventListener('click',createMovieDetail); 

const  makeSearch = title =>{
    $.ajax({
        dataType : "json",
        url:  `${url}&s=${title}&type=movie`
      }).done(getResults).fail(function (status) {
        console.log("error");
      })

}

const getResults = response => {
  console.log(response)
  container.innerHTML = ''
  if(response.Response == 'False'){
    return;
  }

  allTheMovies = response.Search;
  let algo = response.Search.map( function(currentMovie,index){
    let sorprise = new Movie(currentMovie);

    // console.log(index)
    let element = `<li class="movie" data-index = "${index}">
            <img class= "poster" src="${sorprise.poster()}">
            <p class="title">${sorprise.getTitle()}</p>
            <p class="year">${sorprise.year()}</p>
      </li>`

      container.innerHTML += element
      // 
      listEvents();
  });
  
  // this.click = this.createMovieDetail.bind(this);
  // document.querySelector('.movie').addEventListener('click',createMovieDetail); 
};


let listEvents = () => { 
  let elements = document.querySelectorAll('.movie');
  // console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    const container = elements[i];
    
    container.addEventListener('click',() => createMovieDetail(event,i)); 
  }
}

let createMovieDetail = (e,i) =>{
  console.log(i)
  for (let index = 0; index < allTheMovies.length; index++) {
    if (index === i) {
      let focusMovie =  allTheMovies[index];
      console.log(focusMovie)
      getDetail(focusMovie.imdbID);
      return focusMovie;
    }
    
  }
}

export {makeSearch}
