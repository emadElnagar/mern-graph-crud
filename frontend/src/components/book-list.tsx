import { Key } from "react";
import { useBooks } from "../hooks/books";
import Book from "./book";
import ErrorBox from "./Error";

function BookList() {
  const { error, loading, data } = useBooks();
  return(
    loading ? <div>loading</div> :
    error ?  <ErrorBox /> :
    <ul>
      {data.books.map((book: {
        _id: Key,
        title: string,
        author: string
      }) => {
        return (
          <Book key={book._id} title={book.title} author={book.author} />
        )
      })}
    </ul>
  );
}

export default BookList;
