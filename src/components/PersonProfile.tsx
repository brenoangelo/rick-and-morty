interface PersonProfileProps {
  image: string;
  name: string;
}

export function PersonProfile({ image, name }: PersonProfileProps) {
  return (
    <div className="border-[6px] border-green-300 rounded-md w-64">
      <img src={image} alt={name} />

      <caption
        title={name}
        className="text-gray-700 text-2xl text-center bg-green-300 w-full h-9 block text-ellipsis overflow-hidden whitespace-nowrap"
      >
        {name}
      </caption>
    </div>
  );
}
