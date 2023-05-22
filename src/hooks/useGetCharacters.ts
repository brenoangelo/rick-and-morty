import {
  useTransition,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { api } from '../services/api';

interface ResponseCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: {
    gender: string;
    id: number;
    image: string;
    location: {
      name: string;
    };
    name: string;
    origin: {
      name: string;
    };
    species: string;
    status: 'Alive' | 'Dead' | 'unknown';
  }[];
}

export type Characters = ResponseCharacters['results'];

export function useGetCharacters() {
  const [isPending, startTransition] = useTransition();

  const [characters, setCharacters] = useState<Characters>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState('');

  useEffect(() => {
    startTransition(() => {
      getCharacters();
    });
  }, [search]);

  async function getCharacters(currentPage = 1) {
    try {
      const { data } = await api.get<ResponseCharacters>(
        `/character/?page=${currentPage}&name=${search}`,
      );

      setCharacters(data.results);
      setTotalCount(data.info.count);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearch = useCallback(handleSearchFunction, []);

  function handleSearchFunction(value: string) {
    startTransition(() => {
      setSearch(value);
    });
  }

  const handleChangePage = useCallback(handleChangePageFunction, []);

  function handleChangePageFunction(page: number) {
    setCurrentPage(page);

    startTransition(() => {
      getCharacters(page);
    });
  }

  return {
    characters,
    totalCount,
    handleChangePage,
    currentPage,
    handleSearch,
    isPending,
  };
}
