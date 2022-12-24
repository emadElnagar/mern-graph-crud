import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>my library</h1>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
