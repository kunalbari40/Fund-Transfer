import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import HomePassword from './component/HomePassword';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changepassword" element={<HomePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
