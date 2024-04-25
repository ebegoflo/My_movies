
import {makeSearch} from "./Search.js";
import { Movie } from "./Movie.js";

document.querySelector('.search').addEventListener('keyup', validateSearch);

function validateSearch(event) {
    let key = event.key
    let value = document.querySelector('.search').value

    if (key == 'Backspace' && value.length == 0 ) {
        document.querySelector('.show_results').innerHTML = '';
        document.querySelector('.counter').innerHTML = '0'
    }
   
    if (value.length >=3) {
        makeSearch(value)
    }
}

let whisList = () => {
    let favoritesMovies= 
        `<div class="whish_list">
            <p>MOVIES YOU WATCHED</p>
            <ul class="list_ranking"> 
                <li class="list movies">0 movies</li>
                <li class="list raiting">0.0</li>
                <li class="list time average">0 min</li>
            </ul>
            <ul class='favorite_movies'>  </ul>
        </div>`;
    
    const list = document.querySelector('.my_movies');
    list.innerHTML = favoritesMovies;
    evalWhisList();
}

let evalWhisList = () =>{
    const containerList = document.querySelector('.favorite_movies');
    let listFavoritesMovies = JSON.parse(sessionStorage.getItem("movies"));
    console.log(Array.isArray(listFavoritesMovies))
    if (!Array.isArray(listFavoritesMovies)) {return};

    let createListResults = listFavoritesMovies.map( function(current,index){
        let objMovie = new Movie(current);
        let element = `<li class="favorite">
                <img class= "poster" src="${objMovie.poster()}">
                <p class="title">${objMovie.getTitle()}</p>
                <p class="year">${objMovie.duration()}</p>
                <p class="rating">${objMovie.rating()}</p>
                <button class="delete">X</button>
          </li>`
          containerList.innerHTML += element
      });
}

whisList();

export {whisList}