function solve(input){
    const movies = [];

    function findMovieIndex(movieName){
        return movies.findIndex((movie) => movie.name === movieName);
    }
    
    for (const line  of input) {
        if (line.startsWith('addMovie')) {
            const movieName = line.substring(9);

            if (!movies.some((movie) => movie.name === movieName)) {
                movies.push({name: movieName});
            }
        }
        else {
            const [movieName, command, ...params] = line.split(' ');
            const movieIndex = findMovieIndex(movieName);

            if (movieIndex !== -1) {
                if (command === 'directedBy') {
                    const director = params.join(' ');
                    movies[movieIndex].director = director;
                }
                else if (command === 'onDate') {
                    const date = params.join(' ');
                    movies[movieIndex].date = date;
                }
            }
        }
    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie));
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