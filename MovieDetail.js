const container = document.querySelector('.my_movies');
let url = "http://www.omdbapi.com/?apikey=16f0c127";

const  getDetail = idMovie =>{
    $.ajax({
        dataType : "json",
        url:  `${url}&i=${idMovie}`
      }).done(createTemplate).fail(function (status) {
        console.log("error");
      })

}
 
// let getMovieInfo = (idMovie) =>{
//     console.log('aqui debo hacer la siguiente request', idMovie);


// }

let createTemplate = (movie) =>{
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
      </div>`

    container.innerHTML = description
    console.log(' aqui se debe crear el template cuando haya respodido la request ', movie)
}


 export {getDetail}