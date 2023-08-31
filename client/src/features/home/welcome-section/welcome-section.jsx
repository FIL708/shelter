import { motion } from 'framer-motion';
import { Subtitle } from 'components/ui';
import './welcome-section.css';
import { logo } from '../assets';

export default function WelcomeSection() {
  return (
    <section className="home__welcome-section">
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        src={logo}
        alt="welcome section logo"
        className="home__welcome-section__logo"
      />
      <Subtitle text="Welcome!" />
      <p className="home__welcome-section__note">
        Welcome to HelpMeDude! We are a pet adoption company dedicated to
        providing loving homes for animals in need. Our mission is to match each
        of our furry friends with their perfect forever home and to ensure that
        they receive the highest level of care and attention throughout their
        journey with us. With years of experience in the animal adoption
        industry, we have built a reputation for excellence and are committed to
        helping you find your new best friend. Browse our selection of lovable
        pets and start your journey towards a lifetime of unconditional love and
        companionship.
      </p>
    </section>
  );
}
