import { CardsSection } from '../components/CardsSection';
import { Search } from '../components/Search';
import { Pagination } from '../components/Pagination';

import { useGetCharacters } from '../hooks/useGetCharacters';
import { LogoLoading } from '../components/LogoLoading';

export function Home() {
  const {
    characters,
    totalCount,
    handleChangePage,
    currentPage,
    handleSearch,
    loading,
  } = useGetCharacters();

  return (
    <div>
      <header className="bg-hero-pattern min-h-[530px] bg-no-repeat bg-cover bg-bottom">
        <div className="container flex flex-col gap-32 items-center">
          <h1 className="text-7xl text-gray-50 font-bold pt-[248px]">
            Rick and Morty
          </h1>
          <div className="w-full">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center">
          <LogoLoading />
        </div>
      ) : (
        <div>
          <CardsSection characters={characters} />

          <Pagination
            onPageChange={handleChangePage}
            totalCountOfRegisters={totalCount}
            registerPerPage={20}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}
