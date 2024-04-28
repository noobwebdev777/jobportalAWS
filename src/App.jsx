// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Login } from './components/Login/Login';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
