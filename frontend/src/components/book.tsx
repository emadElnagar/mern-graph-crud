import { Fragment, Key, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../hooks/deleteBook";
import LoadingBox from "./LoadingBox";
import ErrorBox from "./Error";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi';
import { GET_BOOKS } from '../hooks/books';

interface BookProps {
  _id: Key;
  title: string;
  author: string;
}

const Book = ({ _id, title, author }: BookProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [deleteBook, { error, loading }] = useMutation(DELETE_BOOK);
  return (
    loading ? <LoadingBox /> :
    error ? <ErrorBox /> :
    <Fragment>
      <li className={`book ${isUpdating === true ? 'd-none' : ''}`}>
        <span className="book-name">
          <Link to={`${_id}`}>{title}</Link>
        </span>
        <div className="buttons">
          <button className="update" onClick={() => setIsUpdating(true)}><HiPencil /></button>
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
                deleteBook({
                  variables: { id: _id },
                  refetchQueries: [{ query: GET_BOOKS }]
                });
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            });
          }}><AiFillDelete /></button>
        </div>
        <span className="author"><small>by: {author}</small></span>
      </li>
      {/* UPDATE FORM */}
      <div className={`update-from ${isUpdating === true ? 'show' : ''}`}>
        <form>
          <div className="fields">
            <input defaultValue={title} type="text" placeholder="Book name" />
            <input defaultValue={author} type="text" placeholder="Book autor" />
          </div>
          <textarea placeholder="Brief about the book"></textarea>
          <div className="buttons">
            <input type="submit" value="submit" />
            <button className="cancel" onClick={() => setIsUpdating(false)}>cancel</button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Book;
