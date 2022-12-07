interface BookProps {
  title: string;
  author: string;
}

const Book = ({ title, author }: BookProps) => {
  return (
    <li className="book">
      <span className="book-name">{title}</span>
      <div className="buttons">
        <button className="update">update</button>
        <button className="delete">delete</button>
      </div>
      <span className="author"><small>by: {author}</small></span>
    </li>
  )
}

export default Book;
