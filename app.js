const express = require("express");
const app = express();

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
  res.json(movies);
};

app.get("/api/movies", getMovies);

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.status(404).send("Not Found!!!");
  }
};

app.get("/api/movies/:id", getMovieById);

module.exports = app;







/*


const express = require("express");
const app = express();
const port = 5100;




app.listen(port, (err) => {
    if(err){
        console.error("Something bad happened");
    } else {
        console.log(`Server is listening on ${port}`)
    }
    })
    
app.get('/', (req, res) => {
res.send("Welcome to my favourite movie list")
})
    

app.get('/api/movies', (req, res) => {
    res.status("200").json(movies);
    })
    
const getMovie = (req, res) => {
    
    let movieToShow =  movies.find((movie) => movie.id == req.params.id)
    if(movieToShow != undefined){
        res.status("200").json(movieToShow.title)
    } else 
        res.status(404).send("Not Found");
    }
    ;
    
app.get("/api/movies/:id", getMovie);

    
const movies = [
    {
      id: 1,
      title: "Citizen Kane",
      director: "Orson Wells",
      year: "1941",
      color: false,
      duration: 120,
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      color: true,
      duration: 180,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: "1994",
      color: true,
      duration: 180,
    },
  ];

*/












/*const express = require("express");
const app = express();
const port = 5100;

app.get("/", (req, res) => {
    res.send("Welcome to express")
})

/*const welcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);

const cocktails = [
    {
      id: 1,
      name: "Margarita",
    },
    {
      id: 2,
      name: "Mojito",
    },
    {
      id: 3,
      name: "Cuba Libre",
    },
  ];

const getCocktails = (req, res) => {
    res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails)


app.listen(port, (err) => {
    if(err){
        console.error("something bad happened");
    } else {
        console.log(`sever is listening on ${port}`)
    }
})
*/
