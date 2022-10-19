import Movie from "./Movie";
import { useState } from "react";
import { getByTitle } from "@testing-library/react";

const MovieList = () => {
  console.log("MovieList has rendered");

  // if state itself has a data structure featuring all our movies, can the content of our list be rendered directly from state?
    // Spoiler alert: Heck Yea

    // const coolState = useState(["Hocus Pocus"]); //a hook is just a function
    // console.log(coolState); //renders an array of 2 values  ["Hocus Pocus", function dispatchSetState()]
  
    // useState is a Hook AKA function.
    // when we call it, it returns an array with 2 values:
      // the first value will be our state variable (featuring the starting value that we passed in as an argument to the useState func call)
      // the second value is the function we will use to update the state variable (and subsequently indicate to React that it must trigger a re-render within the component)
    // variable is destructured
  const [moviesToWatch, setMoviesToWatch] = useState(["Hocus Pocus", "Halloweentown", "It's the Great Pumpkin, Charlie Brown", "Rocky Horror Picture Show", "Harry Potter", "Scream"])

  // outside return, inside component - we define a function which will update the moviesToWatch state
  //i.e. it will remove the selected movie from the state array
  const updateMovieList = () => {
    alert(`${moviesToWatch.movieName} has been watched!`)

    // filter through the array of movies held within state
      // as long as the movie title Does Not match the title of the movie which was clicked on return that movie
      //i.e. filter OUT the movie which was clicked on
  }


  return (
    <ul>
      {/* This is great but requires a lot of needless typing */}

      {/* <Movie title="Hocus Pocus" />
      <Movie title="Halloweentown" />
      <Movie title="It's the Great Pumpkin, Charlie Brown" />
      <Movie title="Rocky Horror Picture Show" />
      <Movie title="Harry Potter" />
      <Movie title="Scream" /> */}

      {/* INSTEAD, what if we store the movies in state, and then loop through state to render a Movie component for each movie held within the state array!!! */}

      {/* let's map through the state array of movies */}
      {/* for every movie string within the array, we will return a Movie component */}

      {
        moviesToWatch.map( (movie, index) => {

          // we need to pass a function as a prop to the Movie component
          // when called within the Movie comp, this function will update state within the MovieList comp

          return <Movie 
                    title={movie} 
                    key={index} 
                    //  want to pass a function within an argument but doesn't want to use it right away - wrap it in an anonymous function (a temporary wrapper that will protect the function to be called right away)
                    handleClick={ () => { updateMovieList(movie) } }
                  />
        })
      }


    </ul>
  )
}

export default MovieList;


// any time we use .map() in react we will get this warning: ************* Warning: Each child in a list should have a unique "key" prop. Check the render method of `MovieList`. See https://reactjs.org/link/warning-keys for more information. Movie@http://localhost:3000/static/js/bundle.js:185:7 MovieList@http://localhost:3000/main.f517cf2648247b675a1d.hot-update.js:41:92 main App

//events flow up