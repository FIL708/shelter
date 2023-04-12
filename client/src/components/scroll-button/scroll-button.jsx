import { Button } from '../index.js';

import './scroll-button.css';

export default function ScrollButton({ visible }) {
  if (!visible) return null;
  return (
    <Button
      iconType="top-arrow"
      iconSize="30px"
      iconFill="#fff2f2"
      className="scroll-button"
    />
  );
}
