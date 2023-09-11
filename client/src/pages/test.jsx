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
        <Button startIcon="user">full left icon</Button>
        <Button endIcon="user">full right icon</Button>
        <Button startIcon="user" endIcon="user">
          full two icons
        </Button>
        <Button disabled>disable full</Button>
        <Button startIcon="user" disabled>
          disable full left icon
        </Button>
        <Button endIcon="user" disabled>
          disable full right icon
        </Button>
        <Button startIcon="user" endIcon="user" disabled>
          disable full two icons
        </Button>
        <Button variant="outline">outline</Button>
        <Button variant="outline" startIcon="user">
          outline left icon
        </Button>
        <Button variant="outline" endIcon="user">
          outline right icon
        </Button>
        <Button variant="outline" startIcon="user" endIcon="user">
          outline two icons
        </Button>
        <Button variant="outline" disabled>
          outline disabled
        </Button>
        <Button variant="outline" startIcon="user" disabled>
          disable outline left icon
        </Button>
        <Button variant="outline" endIcon="user" disabled>
          disable outline right icon
        </Button>
        <Button variant="outline" startIcon="user" endIcon="user" disabled>
          disable outline two icons
        </Button>
      </div>
    </Page>
  );
}
