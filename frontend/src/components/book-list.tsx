import { Key } from "react";
import { useBooks } from "../hooks/books";
import Book from "./book";
import ErrorBox from "./Error";
import LoadingBox from "./LoadingBox";

function BookList() {
  const { error, loading, data } = useBooks();
  return(
    loading ? <LoadingBox /> :
    error ?  <ErrorBox /> :
    <ul>
      {data.books.map((book: {
        _id: Key,
        title: string,
        author: string,
        brief: string
      }) => {
        return (
          <Book key={book._id} _id={book._id} title={book.title} author={book.author} brief={book.brief} />
        )
      })}
    </ul>
  );
}

export default BookList;
