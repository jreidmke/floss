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
    <div className={`text-center text-blue	${color}`}>
      <button
        className="content-center inline-flex items-center py-6"
        type="submit"
        onClick={toggleAccordion}
      >
        <p className="font-semibold text-3xl mr-3">{title}</p>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            d={
              !active
                ? 'M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z'
                : 'M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z'
            }
            stroke="white"
            strokeWidth="2.5"
          />
        </svg>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-4 ">{content}</div>
      </div>
    </div>
  );
};

// <button class="inline-flex items-center px-3 py-2 font-medium rounded px-4 py-2 leading-5 bg-green-500 text-primary-100 text-white hover:text-white hover:bg-green-700">
//     <svg class="inline-block w-5 h-5 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> Woohoo!
// </button>
