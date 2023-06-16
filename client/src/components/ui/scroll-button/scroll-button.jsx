import { useScrollToggle } from '../../../hooks';
import { Button } from '../../form';

import './scroll-button.css';

export default function ScrollButton({ offset }) {
  const isScrollButtonVisible = useScrollToggle(offset || 200);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const scrollButtonClassName = isScrollButtonVisible
    ? 'scroll-button'
    : 'scroll-button inactive';
  return (
    <Button
      iconType="top-arrow"
      iconSize="30px"
      iconFill="#fff2f2"
      className={scrollButtonClassName}
      onClick={scrollToTop}
    />
  );
}
