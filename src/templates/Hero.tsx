import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { LogoLink } from '../hero/LogoLink';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <div className="bg-hero-pattern pb-12">
    <div>
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.adha.org/">
            <a>
              <LogoLink src="/assets/images/adha-logo.png" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.ada.org" passHref>
            <a>
              <LogoLink src="/assets/images/ada-logo.png" />
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </div>
    <div className="mt-32">
      <HeroOneButton
        title={
          <>
            {'A dazzling smile starts with...\n'}
            <span className="text-primary-700">The Perfect Floss</span>
          </>
        }
        description="Click below to learn how to perform the perfect floss!"
        button={
          <Link href="https://www.adha.org/sites/default/files/7222_Proper_Flossing_1.pdf">
            <a>
              <Button xl>The Pefect Floss</Button>
            </a>
          </Link>
        }
      />
    </div>
  </div>
);

export { Hero };
