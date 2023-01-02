import { useMutation } from "@apollo/client";
import { useState } from "react";
import Swal from "sweetalert2";
import { CREATE_NEW_BOOK } from "../hooks/NewBook";

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [brief, setBrief] = useState('');
  const [createNewBook, { error }] = useMutation(CREATE_NEW_BOOK);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(error) {
      Swal.fire({
        title: 'Error',
        text: `${ error.message }`,
        icon: 'warning',
      });
    }
    createNewBook({
      variables: { title, author, brief }
    });
  }
  return (
    <div className="paper">
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Book name" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" id="autor" placeholder="Book autor" onChange={(e) => setAuthor(e.target.value)} />
        <textarea id="brief" placeholder="Brief about the book" onChange={(e) => setBrief(e.target.value)}></textarea>
        <input type="submit" value="craate" />
      </form>
    </div>
  );
}

export default Form;
