import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [watchlist,setWatchlist] = useState([])
  const [desc, setDesc] = useState([])
  const [page, setPage] = useState('home')

  const [movies] = useState([
    {
      title: 'RISE OF THE GUARDIAN',
      image: 'hello',
      desc:"Generation after generation, immortal Guardians like Santa Claus (Alec Baldwin), the Easter Bunny (Hugh Jackman) and the Tooth Fairy (Isla Fisher) protect the world's children from darkness and despair. However, an evil boogeyman named Pitch Black (Jude Law) schemes to overthrow the Guardians by obliterating children's belief in them. It falls to a winter sprite named Jack Frost (Chris Pine) to thwart Pitch's plans and save the Guardians from destruction.",
      releasedate: 'Nov 21, 2012',
      ratingtomatoes: '75% 161 Reviews',
      ratingaudience: '80% 100,000+ Ratings'
    },
    {
      title: 'WRECK-IT RALPH',
      image: 'hello',
      desc: 'Arcade-game character Wreck-It Ralph (John C. Reilly) is tired of always being the "bad guy" and losing to his "good guy" opponent, Fix-It Felix (Jack McBrayer). Finally, after decades of seeing all the glory go to Felix, Ralph decides to take matters into his own hands. He sets off on a game-hopping trip to prove that he has what it takes to be a hero. However, while on his quest, Ralph accidentally unleashes a deadly enemy that threatens the entire arcade.',
      releasedate: 'Nov 2, 2012',
      ratingtomatoes: '87% 189 Reviews',
      ratingaudience: '86% 100,000+ Ratings'
    },
    {
      title: 'MINIONS',
      image: 'hello',
      desc: "Evolving from single-celled yellow organisms at the dawn of time, Minions live to serve, but find themselves working for a continual series of unsuccessful masters, from T. Rex to Napoleon. Without a master to grovel for, the Minions fall into a deep depression. But one minion, Kevin, has a plan; accompanied by his pals Stuart and Bob, Kevin sets forth to find a new evil boss for his brethren to follow. Their search leads them to Scarlet Overkill, the world's first-ever super-villainess.",
      releasedate: 'Jul 10, 2015',
      ratingtomatoes: '55% 222 Reviews',
      ratingaudience: '49% 100,000+ Ratings'
    }]
  )

  const addWatchlist = (mov) => {
    setWatchlist([...watchlist, {...mov}])
  }

  const removeWatchlist = (removeMov) => {
    this.setState(prevState => ({     	
    watchlist: prevState.watchlist.filter(mov => mov !== removeMov.target.value)
  }));
  }

  
  

    return 'hello bitches'

}

export default App;
