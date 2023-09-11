import { Page, Subtitle } from 'components/ui';
import { Button } from 'components/form';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <div
        style={{ width: '70%', display: 'flex', gap: '20px', flexWrap: 'wrap' }}
      >
        <Button>full</Button>
        <Button>full left icon</Button>
        <Button>full right icon</Button>
        <Button>full two icons</Button>
        <Button>disable full</Button>
        <Button>disable full left icon</Button>
        <Button>disable full right icon</Button>
        <Button>disable full two icons</Button>
        <Button>outline</Button>
        <Button>outline left icon</Button>
        <Button>outline right icon</Button>
        <Button>outline two icons</Button>
        <Button>outline</Button>
        <Button>disable outline left icon</Button>
        <Button>disable outline right icon</Button>
        <Button>disable outline two icons</Button>
      </div>
    </Page>
  );
}
