import { useBooks } from "../hooks/books";

function BookList() {
  const { error, loading, data } = useBooks();
  return(
    loading ? <div>loading</div> :
    error ?  <div>error</div> :
    <ul>
      {data.books.map((book: { title: string }) => {
        return (
          <li>
            <span className="book-name">{book.title}</span>
            <div className="buttons">
              <button className="update">update</button>
              <button className="delete">delete</button>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default BookList;
