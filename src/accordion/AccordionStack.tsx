import { Accordion } from './Accordion';
import { Flavors } from './Flavors';
import { FlossTypes } from './FlossTypes';
import { Health } from './Health';

function AccordionStack() {
  return (
    <div className="inline-block">
      <Accordion
        color="bg-green-400"
        title="Flavors"
        content={<Flavors />}
        overflow="hidden"
      />
      <Accordion
        color="bg-indigo-400"
        title="Floss Types"
        content={<FlossTypes />}
        overflow="auto"
      />
      <Accordion
        color="bg-pink-400"
        title="Health Information"
        content={<Health />}
        overflow="hidden"
      />
    </div>
  );
}

export { AccordionStack };
