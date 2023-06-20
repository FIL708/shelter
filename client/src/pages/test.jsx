import { useState } from 'react';
import { Page, Subtitle } from '../components/ui';
import { Textarea } from '../components/form';
import OpinionsListItem from '../features/adoption/opinions-list/opinion/opinion.jsx';

export default function Test() {
  const [state, setState] = useState();
  const onChange = (event) => {
    const { value } = event.target;
    setState(value);
  };

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <OpinionsListItem
        body="asdasdg asdhasdhasd hasdhasdh hasdhasd"
        user={{ firstName: 'Filip', lastName: 'Zebrowski' }}
        updatedAt="1994-02-01"
      />
      <Textarea onChange={onChange} value={state} />
    </Page>
  );
}
