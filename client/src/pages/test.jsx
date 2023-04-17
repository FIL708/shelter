import { useState } from 'react';
import {
  Page,
  Subtitle,
  PetCard,
  Pagination,
  ErrorCard,
  ScrollButton,
  GalleryController,
  Dropdown,
  HomeCard,
  HomeGoalsSection,
  UserNavbar,
} from '../components';
import { useScrollToggle } from '../hooks';

export default function Test() {
  const visible = useScrollToggle(200);
  console.log(visible);
  const [filteringTag, setFilteringTag] = useState('all');
  const [page, setPage] = useState(1);
  const [dropdown, setDropdown] = useState('');
  const handleDropdown = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setDropdown(value);
  };
  const pages = 10;
  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > pages) return;
    setPage(value);
  };
  const filterByTag = (event) => {
    setFilteringTag(event.target.value);
  };

  const logoutHandler = () => {
    console.log('logout');
  };

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <PetCard
        url="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg"
        name="Mialczynski"
        location="Ameryka, Poland"
        description="asdadasd asd asd asd asd asd a dasd asd asdasd asda sdasd as..."
        createdAt="05 march 1995"
        mode="list"
      />
      <Pagination page={page} changePage={changePage} pages={pages} />
      <ErrorCard errorCode="404" errorMessage="Page not found!" />
      <ScrollButton />
      <GalleryController onChange={filterByTag} value={filteringTag} />
      <Dropdown
        name="search_dropdown"
        values={['first-name', 'last-name', 'email', 'role']}
        label="Search by"
        placeholder="placeholder"
        value={dropdown}
        onChange={(event) => handleDropdown(event)}
      />
      <HomeCard
        title="title"
        text="Lorem ipsum dolor sit amet consectetur. Netus integer bibendum at pharetra leo nisl."
        url="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
        vertical
      />
      <HomeGoalsSection />
      <UserNavbar userRole="user" />
      <UserNavbar userRole="admin" logoutHandler={logoutHandler} />
    </Page>
  );
}
