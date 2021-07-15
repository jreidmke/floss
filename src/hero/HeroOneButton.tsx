import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="bg-pink-100 bg-opacity-50 text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 text-primary-800">
      {props.description}
    </div>
    <div className="pb-10">{props.button}</div>
  </header>
);

export { HeroOneButton };
