import { useEffect, useState } from 'react';
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

type Characters = ResponseCharacters['results'];

export function useGetCharacters() {
  const [characters, setCharacters] = useState<Characters>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCharacters();
  }, [search]);

  async function getCharacters(currentPage = 1) {
    setLoading(true)

    try {
      const { data } = await api.get<ResponseCharacters>(
        `/character/?page=${currentPage}&name=${search}`,
      );

      setCharacters(data.results);
      setTotalCount(data.info.count);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  function handleSearch(value: string) {
    setSearch(value);
  }

  function handleChangePage(page: number) {
    setCurrentPage(page);
    getCharacters(page);
  }

  return {
    characters,
    totalCount,
    handleChangePage,
    currentPage,
    handleSearch,
    loading
  };
}
