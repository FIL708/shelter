import { Button } from '../index.js';

import './scroll-button.css';

export default function ScrollButton() {
  return (
    <Button
      iconType="top-arrow"
      iconSize="30px"
      iconFill="#fff2f2"
      className="scroll-button"
    />
  );
}
