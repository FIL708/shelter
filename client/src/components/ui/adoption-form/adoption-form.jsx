import { Subtitle } from 'components/ui';

import './adoption-form.css';

export default function AdoptionForm({ title }) {
  return (
    <form className="adoption-form">
      <Subtitle text={title} main />
    </form>
  );
}
