import { useEffect, useState } from 'react';
import { CardsSection } from '../components/CardsSection';
import { Search } from '../components/Search';
import { api } from '../services/api';

export function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    try {
      const { data } = await api.get('/character/');

      setCharacters(data.results)

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <header className="bg-hero-pattern min-h-[530px] bg-no-repeat bg-cover bg-bottom">
        <div className="container flex flex-col gap-32 items-center">
          <h1 className="text-7xl text-gray-50 font-bold pt-[248px]">
            Rick and Morty
          </h1>
          <div className="w-full">
            <Search />
          </div>
        </div>
      </header>

      <CardsSection characters={characters}/>
    </div>
  );
}
