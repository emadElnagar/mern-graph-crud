interface BookProps {
  title: string;
  author: string;
  brief: string;
}

const Book = ({ title, author, brief }: BookProps) => {
  return (
    <li>
      <span className="book-name">{title}</span>
      <div className="buttons">
        <button className="update">update</button>
        <button className="delete">delete</button>
      </div>
    </li>
  )
}

export default Book;
