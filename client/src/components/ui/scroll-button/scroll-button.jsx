import { Button } from '../../form';

import './scroll-button.css';

export default function ScrollButton({ visible }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const scrollButtonClassName = visible
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
