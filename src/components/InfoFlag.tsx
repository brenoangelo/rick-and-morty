import {
  Alien,
  GenderFemale,
  GenderMale,
  MapPin,
  Question,
  RocketLaunch,
  Smiley,
  SmileyXEyes,
} from 'phosphor-react';

const infoTypes = {
  femaleGender: {
    icon: <GenderFemale size={20} weight="bold" />,
    color: 'yellow-300',
  },
  maleGender: {
    icon: <GenderMale size={20} weight="bold" />,
    color: 'yellow-300',
  },
  alive: {
    icon: <Smiley size={20} weight="bold" />,
    color: 'green-300',
  },
  dead: {
    icon: <SmileyXEyes size={20} weight="bold" />,
    color: 'red-300',
  },
  unknown: {
    icon: <Question size={20} weight="bold" />,
    color: 'blue-300',
  },
  species: {
    icon: <Alien size={20} weight="bold" />,
    color: 'blue-100',
  },
  origin: {
    icon: <RocketLaunch size={20} weight="bold" />,
    color: 'white',
  },
  location: {
    icon: <MapPin size={20} weight="bold" />,
    color: 'pink-300',
  },
};

interface InfoFlagProps {
  type: keyof typeof infoTypes;
  value: string;
  prefix: string;
}

export function InfoFlag({ type, value, prefix }: InfoFlagProps) {
  const { color, icon } = infoTypes[type];

  if(!infoTypes[type]) {
    return null;
  }

  return (
    <div
      className={`text-white border-2 text-${color} border-${color} flex items-center gap-2 max-w-sm w-full h-12 px-4 rounded-md`}
    >
      {icon}
      <strong>{prefix}:</strong>{' '}
      <span
        className="text-ellipsis overflow-hidden whitespace-nowrap"
        title={value}
      >
        {value}
      </span>
    </div>
  );
}
