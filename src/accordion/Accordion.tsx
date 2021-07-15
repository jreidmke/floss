import React, { useRef, useState, ReactNode } from 'react';

interface AccordionProps {
  color: string;
  title: string;
  content: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  color,
  title,
  content,
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    // setRotate(
    //   active
    //     ? 'transform duration-700 ease'
    //     : 'transform duration-700 ease rotate-180'
    // );
  }

  return (
    <div className={`flex flex-col text-center text-white	${color}`}>
      <button
        className="text-center py-6"
        type="submit"
        onClick={toggleAccordion}
      >
        <p className="font-semibold text-3xl">{title}</p>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-4 ">{content}</div>
      </div>
    </div>
  );
};
