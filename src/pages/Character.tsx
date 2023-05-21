import { Link, useParams } from 'react-router-dom';

import { PersonProfile } from '../components/PersonProfile';
import { InfoFlag } from '../components/InfoFlag';
import { useGetPerson } from '../hooks/useGetPerson';
import { ArrowLeft } from 'phosphor-react';

export function Character() {
  const { id } = useParams();
  const { characterInfo, loading } = useGetPerson(Number(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col items-center py-20">
      <Link
        to="/"
        className="h-8 flex items-center text-green-300 gap-2 w-full hover:animate-pulse"
      >
        <ArrowLeft /> Back to home
      </Link>
      <PersonProfile image={characterInfo.image} name={characterInfo.name} />

      <main className="mt-10 w-full flex flex-col items-center gap-6">
        <InfoFlag
          value={characterInfo.gender}
          type={characterInfo.gender === 'Male' ? 'maleGender' : 'femaleGender'}
          prefix="Gender"
        />

        <InfoFlag
          value={characterInfo.status}
          type={characterInfo.status === 'Alive' ? 'alive' : 'dead'}
          prefix="Status"
        />

        <InfoFlag
          value={characterInfo.species}
          type="species"
          prefix="Species"
        />

        <InfoFlag
          value={characterInfo.origin.name}
          type="origin"
          prefix="Origin"
        />

        <InfoFlag
          value={characterInfo.location.name}
          type="location"
          prefix="Location"
        />
      </main>
    </div>
  );
}
