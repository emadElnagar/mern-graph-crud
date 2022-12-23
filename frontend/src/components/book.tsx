import { Key } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../hooks/deleteBook";
import LoadingBox from "./LoadingBox";
import ErrorBox from "./Error";
import Swal from "sweetalert2";

interface BookProps {
  _id: Key;
  title: string;
  author: string;
}

const Book = ({ _id, title, author }: BookProps) => {
  const [deleteBook, { error, loading }] = useMutation(DELETE_BOOK);
  return (
    loading ? <LoadingBox /> :
    error ? <ErrorBox /> :
    <li className="book">
      <span className="book-name">{title}</span>
      <div className="buttons">
        <button className="update">update</button>
        <button className="delete" onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteBook({variables: {id: _id}});
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          });
        }}>delete</button>
      </div>
      <span className="author"><small>by: {author}</small></span>
    </li>
  )
}

export default Book;
