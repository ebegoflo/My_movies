 class Movie {

    constructor(movie){
        this.movie = movie
        // console.log(this.movie,' funciona!!')
    }

    getTitle(){
        return this.movie.Title;
    }
    actors(){
        return this.movie.Actors
    }

    year(){
        return this.movie.Year
    }
    plot(){
        return this.movie.Plot
    }
    director(){
        return this.movie.Director
    }
    released(){
        return this.movie.Released
    }
    genere(){
        return this.movie.Genre
    }

    duration(){
        return this.movie.Runtime
    }
    rating(){
        return this.movie.imdbRating
    }
    id(){
        return this.movie.imdbID
    }
    poster(){
        return this.movie.Poster
    }

}

export {Movie}