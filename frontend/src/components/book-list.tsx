function BookList() {
  return(
    <ul>
      <li>
        <span className="book-name">book 1</span>
        <div className="buttons">
          <button className="update">update</button>
          <button className="delete">delete</button>
        </div>
      </li>
      <li>
        <span className="book-name">book 2</span>
        <div className="buttons">
          <button className="update">update</button>
          <button className="delete">delete</button>
        </div>
      </li>
      <li>
        <span className="book-name">book 3</span>
        <div className="buttons">
          <button className="update">update</button>
          <button className="delete">delete</button>
        </div>
      </li>
    </ul>
  );
}

export default BookList;
