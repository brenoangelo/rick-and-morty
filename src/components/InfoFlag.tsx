import {
  Alien,
  GenderFemale,
  GenderMale,
  MapPin,
  RocketLaunch,
  Smiley,
  SmileyXEyes,
} from 'phosphor-react';

const infoTypes = {
  femaleGender: {
    icon: <GenderFemale size={20} weight="bold" />,
    styles: 'border-yellow-300 text-yellow-300',
  },
  maleGender: {
    icon: <GenderMale size={20} weight="bold" />,
    styles: 'border-yellow-300 text-yellow-300',
  },
  alive: {
    icon: <Smiley size={20} weight="bold" />,
    styles: 'border-green-300 text-green-200',
  },
  dead: {
    icon: <SmileyXEyes size={20} weight="bold" />,
    styles: 'border-red-300 text-red-300',
  },
  species: {
    icon: <Alien size={20} weight="bold" />,
    styles: 'border-blue-100 text-blue-100',
  },
  origin: {
    icon: <RocketLaunch size={20} weight="bold" />,
    styles: 'border-white text-white',
  },
  location: {
    icon: <MapPin size={20} weight="bold" />,
    styles: 'border-pink-300 text-pink-300',
  },
};

interface InfoFlagProps {
  type: keyof typeof infoTypes;
  value: string;
  prefix: string;
}

export function InfoFlag({ type, value, prefix }: InfoFlagProps) {
  const { styles, icon } = infoTypes[type];

  return (
    <div
      className={`text-white border-2 ${styles} flex items-center gap-2 max-w-sm w-full h-12 px-4 rounded-md`}
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
