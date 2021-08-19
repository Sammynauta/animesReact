import './App.css';
import Pesquisar from './components/Pesquisar';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=18`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <Pesquisar value={text} onChange={(str) => setText(str)} />
      {text && !info.data && <span>Caregando...</span>}
      {info.data && (
        <ul className='animes-lista'>
          {info.data.map((anime) =>
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
