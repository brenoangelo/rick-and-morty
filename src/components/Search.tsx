import { MagnifyingGlass } from 'phosphor-react';

interface SearchProps {
  handleSearch: (value: string) => void;
}

export function Search({ handleSearch }: SearchProps) {

  return (
    <div className="w-full h-14 flex relative bg-gray-700 rounded-md">
      <span className="absolute left-3 top-4">
        <MagnifyingGlass className="text-yellow-300" size={20} />
      </span>
      <input
        type="search"
        placeholder="Search here..."
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full h-full px-10 bg-transparent focus:outline-none border-2 border-yellow-300 focus:border-green-300 rounded-md text-white text-sm"
      />
    </div>
  );
}
