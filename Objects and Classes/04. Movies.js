function solve(input) {

    let movies = [];

    reciveCommands(input, movies);

    movies.filter(m => m.director && m.name && m.date)
        .forEach(m => console.log(JSON.stringify(m)));

    
    function reciveCommands(commands, listOfMovies){
        for(let command of commands){
            let cmd = command.split(' ');

            if(cmd[0] === 'addMovie'){
                let movieToAdd = { name: cmd.slice(1).join(' ')};

                addMovie(movieToAdd, listOfMovies);
            }else if(cmd.includes('directedBy')){
                let [movieName, director] = command.split(' directedBy ');

                addMovieDirector(director, movieName, listOfMovies);
            }else if(cmd.includes('onDate')){
                let [movieName, date] = command.split(' onDate ');
                
                addReleaseDate(date, movieName, listOfMovies);
            }
        }
    }

    function addMovie(movie, listOfMovies){
        listOfMovies.push(movie);
    }

    function addMovieDirector(movieDirector, movieName, listOfMovies){
        let currMovie = listOfMovies.find(m => m.name === movieName);

        if(currMovie){
            currMovie.director = movieDirector;
        }
    }

    function addReleaseDate(movieDate, movieName, listOfMovies){
        let currMovie = listOfMovies.find(m => m.name === movieName);

        if(currMovie){
            currMovie.date = movieDate;
        }
    }
}
solve([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

]);