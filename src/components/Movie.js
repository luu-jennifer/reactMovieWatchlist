const Movie = (props) => {
  console.log("Movie is rendering");
  console.log(props);
  return(
    <li>
      {/* props is an object then dot notation will access the key title property */}
      <p>{props.title}</p>
      <button onClick={props.handleClick}>I have watched this movie</button>
    </li>
  )
}

export default Movie;