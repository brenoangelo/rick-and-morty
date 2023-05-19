import { useEffect, useState } from 'react';
import { CardsSection } from '../components/CardsSection';
import { Search } from '../components/Search';
import { api } from '../services/api';
import { Pagination } from '../components/Pagination';

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters(currentPage = 1) {
    try {
      const { data } = await api.get(`/character/?page=${currentPage}`);

      setCharacters(data.results);
      setTotalCount(data.info.count);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChangePage(page: number) {
    setCurrentPage(page);
    getCharacters(page);
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

      <div>
        <CardsSection characters={characters} />

        <Pagination
          onPageChange={handleChangePage}
          totalCountOfRegisters={totalCount}
          registerPerPage={20}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
