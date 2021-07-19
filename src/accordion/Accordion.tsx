/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
import React, { useRef, useState, ReactNode } from 'react';

interface AccordionProps {
  color: string;
  title: string;
  content: ReactNode;
  overflow: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  color,
  title,
  content,
  overflow,
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');
  console.log(rotate);
  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight * 3}px`);
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    );
  }

  return (
    <div className={`text-center inline-block text-white	w-1/3 ${color}`}>
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
        style={{ maxHeight: `${height}`, overflow: `${overflow}` }}
        className="transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-4 ">{content}</div>
      </div>
    </div>
  );
};
