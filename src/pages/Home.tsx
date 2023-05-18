import { Search } from '../components/Search';

export function Home() {
  return (
    <div>
      <header className="bg-hero-pattern min-h-[530px] bg-no-repeat bg-cover bg-bottom flex flex-col items-center">
        <h1 className="text-7xl text-gray-50 font-bold mt-[248px]">Rick and Morty</h1>

        <div className='mt-auto mb-5'>
          <Search />
        </div>
      </header>
    </div>
  );
}
