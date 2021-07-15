import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your perfect smile is  just a floss away"
    description="Flossing is no fun! But what if there was something that made flossing an experience that is better, easier, faster, smarter..."
  >
    <VerticalFeatureRow
      title="Do your teeth need a new shine?"
      description="Get that dental level clean feeling with our new product. Treat those peraly whites to the latest and greatest in flossing technology. Why go to the dentist, when you can have the dentist at the convience of your house!"
      image="/assets/images/floss1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="AI Flossing Technology"
      description="AI may be a buzzword, but we take the buzz out of that word with our automated hygene tool. Our scientists have spent ages perfecting the perfect floss tool, customized to you! Analyze all the data about those beautiful chompers of yours and gums and create a customized profile to YOUR needs, because you are a unique person."
      image="/assets/images/floss2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Don't wait! Order Now"
      description="Our operators are standing by to take your call, there is nothing more we would want then to get you the right device for your needs!"
      image="/assets/images/floss3.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
