import { Accordion } from '../accordion/Accordion';
import { Flavors } from '../accordion/Flavors';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Accordion color="bg-red-400" title="Flavors" content={<Flavors />} />
    <Footer />
  </div>
);

export { Base };
