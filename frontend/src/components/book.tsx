import { Key } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../hooks/deleteBook";

interface BookProps {
  _id: Key;
  title: string;
  author: string;
}

const Book = ({ _id, title, author }: BookProps) => {
  const [deleteBook, { error, loading }] = useMutation(DELETE_BOOK);
  return (
    <li className="book">
      <span className="book-name">{title}</span>
      <div className="buttons">
        <button className="update">update</button>
        <button className="delete" onClick={() => {
          deleteBook({variables: {id: _id}})
        }}>delete</button>
      </div>
      <span className="author"><small>by: {author}</small></span>
    </li>
  )
}

export default Book;
