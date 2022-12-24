import { Fragment } from 'react';
import BookList from '../components/book-list';
import Form from '../components/form';


const HomePage = () => {
  return (
    <Fragment>
      <Form />
      <BookList />
    </Fragment>
  )
}

export default HomePage;
