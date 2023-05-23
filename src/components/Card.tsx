import { Link } from "react-router-dom";

const statusColors = {
  Alive: 'bg-green-300',
  Dead: 'bg-red-300',
  unknown: 'bg-yellow-300'
}

interface CardProps {
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  image: string;
  id: number;
}

export function Card({ name, status, image, id }: CardProps) {
  const statusColor = statusColors[status];

  return (
    <Link
      to={`/character/${id}`}
      className={`group w-48 h-64 smartphone:w-full desktop:w-48 relative border-2 rounded-md hover:border-green-300 cursor-pointer transition-colors`}
    >
      <img
        src={image}
        alt={name}
        className="object-cover h-full w-full absolute -z-2 rounded-sm"
      />

      <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent via-transparent flex flex-col justify-end p-4">
        <strong className="text-white text-base group-hover:text-green-300 transition-colors">
          {name}
        </strong>
        <div className="flex items-center gap-1">
          <span className={`w-1 h-1 ${statusColor} rounded-full`}></span>
          <span className="text-white text-xs">{status}</span>
        </div>
      </div>
    </Link>
  );
}
