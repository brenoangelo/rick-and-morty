import { Card } from './Card';

const cards = [
  {
    name: 'Rick sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Dead',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Dead',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Rick sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
];

export function CardsSection({characters}) {
  return (
    <main className="container flex flex-wrap gap-16 items-center mt-20">
      {characters.map((card) => (
        <Card
          image={card.image}
          name={card.name}
          status={card.status as 'Alive' | 'Dead'}
          id={card.id}
        />
      ))}
    </main>
  );
}
