import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Click here to see our options or to speak with one of our operators"
      subtitle="Start your Free Trial."
      button={
        <Link href="/">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
    <div
      className="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
    />
  </Section>
);

export { Banner };
