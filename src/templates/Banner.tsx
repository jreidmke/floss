// import Link from 'next/link';

// import { Button } from '../button/Button';
// import { CTABanner } from '../cta/CTABanner';
import { Carousel } from 'react-responsive-carousel';

import { Section } from '../layout/Section';

// import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const React = require('react');

const Banner = () => (
  <Section>
    {/* <CTABanner
      title="Testimonials"
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    /> */}
    <Carousel
      showThumbs={Boolean(false)}
      showArrows={Boolean(true)}
      infiniteLoop={Boolean(true)}
    >
      <div className="text-center flex flex-col p-4 sm:text-left sm:flex-col sm:items-center sm:justify-between sm:p-12 bg-pink-200 rounded-md">
        <p className="text-center text-lg leading-9">
          &quot;Thanks floss! Floss is great. I like floss more and more each
          day because it makes my life a lot easier.&quot;
        </p>
        <p className="mt-4 font-extrabold">Hernando Y.</p>
        <img
          className="object-scale-down h-28 mt-4"
          src="/assets/images/person1.jpg"
        />
      </div>
      <div className="text-center flex flex-col p-4 sm:text-left sm:flex-col sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
        <p className="text-center text-lg leading-9">
          &quot;I am so pleased with this product. The service was excellent.
          The service was excellent. Floss was the best investment I ever
          made.&quot;
        </p>
        <p className="mt-4 font-extrabold">Trudie T.</p>
        <img
          className="object-scale-down h-28 mt-4"
          src="/assets/images/person2.jpg"
        />
      </div>
      <div className="text-center flex flex-col p-4 sm:text-left sm:flex-col sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
        <p className="text-center text-lg leading-9">
          &quot;I am so pleased with this product. I will let my mum know about
          this, she could really make use of floss!&quot;
        </p>
        <p className="mt-4 font-extrabold">Frank F.</p>
        <img
          className="rounded-md object-scale-down h-28 mt-4"
          src="/assets/images/person3.jpg"
        />
      </div>
    </Carousel>
  </Section>
);

export { Banner };
