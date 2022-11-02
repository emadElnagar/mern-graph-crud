import './App.css';
import BookList from './components/book-list';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <header>
        <h1>my library</h1>
      </header>
      <Form />
      <BookList />
    </div>
  );
}

export default App;
