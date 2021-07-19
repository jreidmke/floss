import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex-initial bg-blue-200 bg-opacity-75 rounded-md p-8 w-full lg:w-2/5">
    <h1 className="text-4xl text-gray-900 font-bold whitespace-pre-line leading-hero pt-2">
      {props.title}
    </h1>
    <div className="text-2xl mb-8 text-pink-500">{props.description}</div>
    <div className="pb-6">{props.button}</div>
  </header>
);

export { HeroOneButton };
