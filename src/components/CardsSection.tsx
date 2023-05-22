import { Card } from './Card';

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
