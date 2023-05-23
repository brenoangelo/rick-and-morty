import { CardsSection } from '../components/CardsSection';
import { Search } from '../components/Search';
import { Pagination } from '../components/Pagination';

import { useGetCharacters } from '../hooks/useGetCharacters';
import { LogoLoading } from '../components/LogoLoading';

import rickSanchezNotFoundIlustration from '../assets/rick-and-morty-not-found.png';

export function Home() {
  const {
    characters,
    totalCount,
    handleChangePage,
    currentPage,
    handleSearch,
    isPending,
  } = useGetCharacters();

  function renderCharactersList() {
    if (!characters.length) {
      return (
        <div className="flex flex-col items-center p-8">
          <strong className='text-green-300 text-4xl mb-4'>There is nothing here</strong>
          <img
            src={rickSanchezNotFoundIlustration}
            alt=""
            className="max-w-xs border-b-4 border-green-300"
          />
        </div>
      );
    }

    return (
      <>
        {isPending ? (
          <div className="flex justify-center">
            <LogoLoading />
          </div>
        ) : (
          <div>
            <CardsSection characters={characters} />
          </div>
        )}
        <Pagination
          onPageChange={handleChangePage}
          totalCountOfRegisters={totalCount}
          registerPerPage={20}
          currentPage={currentPage}
        />
      </>
    );
  }

  return (
    <div>
      <header className="bg-hero-pattern min-h-[530px] desktop:min-h-[530px] smartphone:min-h-[200px] bg-no-repeat bg-cover bg-bottom">
        <div className="container flex flex-col gap-32 items-center">
          <h1 className="text-7xl text-gray-50 font-bold pt-[248px] desktop:pt-[248px] smartphone:pt-[40px]">
            Rick and Morty
          </h1>
          <div className="w-full">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
      </header>

      {renderCharactersList()}
    </div>
  );
}
