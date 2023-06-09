import { Characters } from '../hooks/useGetCharacters';
import { Card } from './Card';

interface CardsSectionProps {
  characters: Characters;
}

export function CardsSection({ characters }: CardsSectionProps) {
  return (
    <main className="container flex flex-wrap gap-16 items-center mt-20">
      {characters.map((card) => (
        <Card
          image={card.image}
          name={card.name}
          status={card.status}
          id={card.id}
        />
      ))}
    </main>
  );
}
