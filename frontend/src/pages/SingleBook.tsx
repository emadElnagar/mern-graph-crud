import { useParams } from "react-router-dom";
import ErrorBox from '../components/Error';
import LoadingBox from '../components/LoadingBox';
import { useSingle } from "../hooks/getSingle";

const BookPage = () => {
  const { id } = useParams();
  const { error, loading, data } = useSingle(id);
  const { book } = data;  
  return (
    loading ? <LoadingBox /> :
    error ?  <ErrorBox /> :
    <div className="book-container">
      <h2 className="title">{ book.title }</h2>
      <p>{ book.brief }</p>
      <span>Created by: <span className="autor-name">{ book.author }</span></span>
    </div>
  )
}

export default BookPage;
