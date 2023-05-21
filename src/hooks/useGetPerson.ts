import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface CharacterInfo {
  id: number;
  gender: string;
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
}

export function useGetPerson(id: number) {
  const [characterInfo, setCharacterInfo] = useState<CharacterInfo>(
    {} as CharacterInfo,
  );
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacterInfo();
  }, []);

  async function getCharacterInfo() {
    try {
      const { data } = await api.get(`/character/${id}`);

      setCharacterInfo(data);
      console.log({
        data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  return {
    characterInfo,
    loading
  }
}
