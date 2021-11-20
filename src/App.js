import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './comp/styles.css'

function App() {
  const [watchlist,setWatchlist] = useState([])
  const [desc, setDesc] = useState([])
  const [page, setPage] = useState('home')

  const [movies] = useState([
    {
      title: 'RISE OF THE GUARDIAN',
      image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdvdreleasedates.com%2Fimages%2Fposters%2Flarge%2Frise-of-the-guardians-2012-18.jpg&f=1&nofb=1',
      desc:"Generation after generation, immortal Guardians like Santa Claus (Alec Baldwin), the Easter Bunny (Hugh Jackman) and the Tooth Fairy (Isla Fisher) protect the world's children from darkness and despair. However, an evil boogeyman named Pitch Black (Jude Law) schemes to overthrow the Guardians by obliterating children's belief in them. It falls to a winter sprite named Jack Frost (Chris Pine) to thwart Pitch's plans and save the Guardians from destruction.",
      releasedate: 'Nov 21, 2012',
      ratingtomatoes: '75% 161 Reviews',
      ratingaudience: '80% 100,000+ Ratings'
    },
    {
      title: 'WRECK-IT RALPH',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdisney%2Fimages%2F8%2F89%2FWreck_It_Ralph_Poster.jpeg%2Frevision%2Flatest%3Fcb%3D20181231152041&f=1&nofb=1',
      desc: 'Arcade-game character Wreck-It Ralph (John C. Reilly) is tired of always being the "bad guy" and losing to his "good guy" opponent, Fix-It Felix (Jack McBrayer). Finally, after decades of seeing all the glory go to Felix, Ralph decides to take matters into his own hands. He sets off on a game-hopping trip to prove that he has what it takes to be a hero. However, while on his quest, Ralph accidentally unleashes a deadly enemy that threatens the entire arcade.',
      releasedate: 'Nov 2, 2012',
      ratingtomatoes: '87% 189 Reviews',
      ratingaudience: '86% 100,000+ Ratings'
    },
    {
      title: 'MINIONS',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FoYsloNq9IYADOdzlsfDmuUQvJ2u.jpg&f=1&nofb=1',
      desc: "Evolving from single-celled yellow organisms at the dawn of time, Minions live to serve, but find themselves working for a continual series of unsuccessful masters, from T. Rex to Napoleon. Without a master to grovel for, the Minions fall into a deep depression. But one minion, Kevin, has a plan; accompanied by his pals Stuart and Bob, Kevin sets forth to find a new evil boss for his brethren to follow. Their search leads them to Scarlet Overkill, the world's first-ever super-villainess.",
      releasedate: 'Jul 10, 2015',
      ratingtomatoes: '55% 222 Reviews',
      ratingaudience: '49% 100,000+ Ratings'
    },
    {
      title: 'MONSTERS UNIVERSITY',
      image: 'http://www.newdvdreleasedates.com/images/posters/large/monsters-university-2013-18.jpg',
      desc: "Ever since he was a kid monster, Mike Wazowski (Billy Crystal) has dreamed of becoming a Scarer. To make his dream a reality, he enrolls at Monsters University. During his first semester, he meets Sulley (John Goodman), a natural-born Scarer. Sulley and Mike engage in a fierce rivalry that ultimately gets them both kicked out of MU's elite Scare Program. To make things right, Mike and Sulley -- along with a bunch of misfit monsters -- will have to learn to work together.",
      releasedate: 'Jun 21, 2013',
      ratingtomatoes: '80% 203 Reviews',
      ratingaudience: '81% 250,000+ Ratings'
    },
    {
      title: 'DESPICABLE ME 2',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffanart.tv%2Ffanart%2Fmovies%2F93456%2Fmovieposter%2Fdespicable-me-2-52dab3f7d7cfa.jpg&f=1&nofb=1',
      desc: "Now that Gru (Steve Carell) has forsaken a life of crime to raise Margo, Agnes and Edith, he's trying to figure out how to provide for his new family. As he struggles with his responsibilities as a father, the Anti-Villain League -- an organization dedicated to fighting evil -- comes calling. The AVL sends Gru on a mission to capture the perpetrator of a spectacular heist, for who would be better than the world's greatest ex-villain to capture the individual who seeks to usurp his power.",
      releasedate: 'Jul 3, 2013',
      ratingtomatoes: '75% 186 Reviews',
      ratingaudience: '85% 250,000+ Ratings'
    },
    {
      title: "BABY'S DAY OUT",
      image: 'https://image.tmdb.org/t/p/original/21U2jwl36hoTHsXB3fDuIQkcchu.jpg',
      desc: "Posing as children's photographers, three crooks (Joe Mantegna, Joe Pantoliano, Brian Haley) scheme their way into a mansion to kidnap an infant (Adam Robert Worton, Jacob Joseph Worton). Their hostage proves quite resourceful, however, escaping their hideout and making his way into downtown Chicago. Now the con men have to find their abductee, who believes that in order to return home he must reenact scenes from his favorite storybook, including trips to the zoo and a construction site.",
      releasedate: 'Jul 1, 1994',
      ratingtomatoes: '20% 15 Reviews',
      ratingaudience: '52% 100,000+ Ratings'
    },
    {
      title: 'HOME ALONE',
      image: 'https://image.tmdb.org/t/p/original/cTPoMCPWtulydMETcYhNjqh9y3v.jpg',
      desc: "When bratty 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother (Catherine O'Hara) makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house and assumes his wish to have no family has come true. But his excitement sours when he realizes that two con men (Joe Pesci, Daniel Stern) plan to rob the McCallister residence, and that he alone must protect the family home.",
      releasedate: 'Nov 16, 1990',
      ratingtomatoes: '66% 58 Reviews',
      ratingaudience: '80% 250,000+ Ratings'
    },
    {
      title: 'HOME ALONE 2: LOST IN NEW YORK',
      image: 'https://fanart.tv/fanart/movies/772/movieposter/home-alone-2-lost-in-new-york-52c587838f51d.jpg',
      desc: "After snarky youth Kevin McCallister (Macaulay Culkin) loses track of his father at the airport, he mistakenly gets on a plane headed for New York City -- while the rest of the McCallisters fly to Florida. Now alone in the Big Apple, Kevin cons his way into a room at the Plaza Hotel and begins his usual antics. But when Kevin discovers that the Sticky Bandits (Joe Pesci, Daniel Stern) are on the loose, he struggles to stop them from robbing an elderly man's toy store just before Christmas.",
      releasedate: 'Nov 20, 1992',
      ratingtomatoes: '34% 56 Reviews',
      ratingaudience: '62% 250,000+ Ratings'
    },
    {
      title: 'HOME ALONE 3',
      image: 'https://fanart.tv/fanart/movies/9714/movieposter/home-alone-3-585c9389de2fc.jpg',
      desc: "When an inept group of criminals tries to get a stolen top-secret computer chip through airport security, it ends up in a toy car in the luggage of the elderly Mrs. Hess (Marian Seldes). Unable to promptly retrieve the chip, the felons follow Hess and the car to her neighborhood. After she gives the toy to young Alex Pruitt (Alex D. Linz), who is home sick from school, he becomes the target of the criminals. However, the precocious kid is on to their schemes and ready to fight the thieves off.",
      releasedate: 'Oct 16, 2007',
      ratingtomatoes: '29% 24 Review ',
      ratingaudience: '27% 250,000+ Rating'
    },
    {
      title: 'TOY STORY 2',
      image: 'https://www.filmlinks4u.is/wp-content/uploads/2010/04/Toy-Story-2-1999-Hollywood-Movie-Watch-Online1.jpg',
      desc: "Woody (Tom Hanks) is stolen from his home by toy dealer Al McWhiggin (Wayne Knight), leaving Buzz Lightyear (Tim Allen) and the rest of the gang to try to rescue him. But when Woody discovers that he's actually a valuable collectible from a once-popular television show called 'Woody's Roundup' and is reunited with his horse Bullseye, Jessie the yodeling cowgirl (Joan Cusack) and his faithful sidekick, Stinky Pete the Prospector (Kelsey Grammer), he doesnt want to leave.",
      releasedate: 'Nov 24, 1999',
      ratingtomatoes: '100% 170 Reviews',
      ratingaudience: '87%  250,000+ Ratings'
    },
  ]
  )

  const addWatchlist = (mov) => {
    setWatchlist([...watchlist, {...mov}])
  }

  const removeWatchlist = (removeMov) => {
    setWatchlist(
      watchlist.filter((mov) => mov !== removeMov)
    );
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const descMovie = (mov) => {
    setDesc([...desc, {...mov}]);
    setPage('desc');
  };

  const fromDesc = (removeDesc) => {
    setDesc(
      desc.filter((desc) => desc !== removeDesc)
    );
    setPage('home');
  };

  const renderHome = () => (
    <>
      <div className = "header">
        <h1>Childhood Memories</h1>
        <a onClick={() => navigateTo('home')}>Home</a>
        <a onClick={() => navigateTo('watchlist')}>Watchlist</a>
      </div>
      <div className = 'container-all'>
        {movies.map((movie, index) => (
        <div className = 'container-one'>
          <img onClick={() => descMovie(movie)} src = {movie.image}></img>
          <p>{movie.title}</p>
          <p>{movie.releasedate}</p>
          <p>{movie.ratingaudience}</p> 
          <div onClick={() => addWatchlist(movie)} className = "button">
          <p>Add to Watchlist</p>          
          </div>

        </div>
        ))}
      </div>

    </>
  );

  const renderWatchlist = () => (
    <>
      <div className = "header">
        <h1>Childhood Memories</h1>
        <a onClick={() => navigateTo('home')}>Home</a>
        <a onClick={() => navigateTo('watchlist')}>Watchlist</a>
      </div>
      <div className ="watchlist-all">
      {watchlist.map((movie, idx) => (
          <div className = "watchlist-one">
              <img src = {movie.image}></img>
                <p>Title: {movie.title}</p>
              <h5 className="RemoveButton" onClick={() => removeWatchlist(movie)}>Remove</h5>
            </div>
          ))}
      </div> 
    </>
    );

  const renderDesc = () => (
    <>
      <div className = "header">
        <h1>Childhood Memories</h1>
        <a onClick={() => navigateTo('home')}>Home</a>
        <a onClick={() => navigateTo('watchlist')}>Watchlist</a>
      </div>
      <div className = "desc-all">
        <h3>Description</h3>
        {desc.map((movie, idx) => (
          <div className = "desc-one">
              <img src = {movie.image}></img>
                <p>Title: {movie.title}</p>
                <p>Rating(Rotten Tomatoes): {movie.ratingtomatoes}</p>
                <p>Rating(Audience Score): {movie.ratingaudience}</p>
                <p>Release Date: {movie.releasedate}</p>
                <p>Description: {movie.desc}</p>
              <h5 className="back-button" onClick={() => fromDesc(movie)}>Back</h5>
            </div>
          ))}
      </div>
    </>
  );

    return (
    <div className="App">
      {page === 'home' && renderHome()}
      {page === 'watchlist' && renderWatchlist()}
      {page === 'desc' && renderDesc()}
    </div>
  );
}

export default App;
