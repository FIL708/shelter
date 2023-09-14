import { useScrollToggle, useWindowSize } from 'hooks';
import { IconButton } from 'components/form';

import './scroll-button.css';

export default function ScrollButton({ offset }) {
  const isScrollButtonVisible = useScrollToggle(offset || 200);
  const { width } = useWindowSize();

  if (width < 1060) return false;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const scrollButtonClassName = isScrollButtonVisible
    ? 'scroll-button'
    : 'scroll-button inactive';
  return (
    <IconButton
      type="top-arrow"
      size="30px"
      background="primary"
      className={scrollButtonClassName}
      onClick={scrollToTop}
    />
  );
}
