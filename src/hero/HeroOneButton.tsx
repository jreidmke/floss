import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="bg-pink-100 bg-opacity-50 rounded-md text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero pt-2">
      {props.title}
    </h1>
    <div className="text-2xl mb-8 text-primary-800">{props.description}</div>
    <div className="pb-6">{props.button}</div>
  </header>
);

export { HeroOneButton };
