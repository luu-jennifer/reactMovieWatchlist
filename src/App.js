import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import Movie from './components/Movie';

function App() {
  console.log("App has rendered");
  return (
    // This is a fragment! It allows us to *technically*
    <>

      <Header />
    
      <main>
    
        <MovieList />
    
      </main>

    </>
  );
}

export default App;