import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Paisaje1 } from './components/Paisaje1';
import { Paisaje2 } from './components/Paisaje2';
import { Paisaje3 } from './components/Paisaje3';
import { Paisaje4 } from './components/Paisaje4';
import { Paisaje5 } from './components/Paisaje5';
import { Paisaje6 } from './components/Paisaje6';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/paisaje1' element={<Paisaje1 />} />
          <Route  path='/paisaje2' element={<Paisaje2 />} />
          <Route  path='/paisaje3' element={<Paisaje3 />} />
          <Route  path='/paisaje4' element={<Paisaje4 />} />
          <Route  path='/paisaje5' element={<Paisaje5 />} />
          <Route  path='/paisaje6' element={<Paisaje6 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
