import { useMutation } from "@apollo/client";
import { useState } from "react";
import Swal from "sweetalert2";
import { CREATE_NEW_BOOK } from "../hooks/NewBook";
import { GET_BOOKS } from '../hooks/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [brief, setBrief] = useState('');
  const [createNewBook, { error }] = useMutation(CREATE_NEW_BOOK);
  const handleSubmit = (e: {
    target: any; preventDefault: () => void; 
  }) => {
    e.preventDefault();
    if(error) {
      Swal.fire({
        title: 'Error',
        text: `${ error.message }`,
        icon: 'error',
      });
    }
    createNewBook({
      variables: { title, author, brief },
      refetchQueries: [{ query: GET_BOOKS }]
    });
    e.target.reset();
  }
  return (
    <div className="paper">
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Book name" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" id="autor" placeholder="Book autor" onChange={(e) => setAuthor(e.target.value)} required />
        <textarea id="brief" placeholder="Brief about the book" onChange={(e) => setBrief(e.target.value)} required ></textarea>
        <input type="submit" value="craate" />
      </form>
    </div>
  );
}

export default Form;
