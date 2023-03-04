import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import HomePassword from './component/HomePassword';
import Dashboard from './component/dashboard/dashboard';
import Deposit from './component/deposit/deposit';
import Balance from './component/balance/balance';
import Withdraw from './component/withdraw/withdraw';
import Transfer from './component/transfer/transfer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changepassword" element={<HomePassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
