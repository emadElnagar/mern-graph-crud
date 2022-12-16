import { useBooks } from "../hooks/books";

function ErrorBox() {
  const { error } = useBooks();
  const message = error?.message;  
  return (
    <div className="error">{ message }</div>
  )
}

export default ErrorBox;
