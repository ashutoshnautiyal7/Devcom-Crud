
import './App.css';
import Navbar from './components/Navbar';
import Devcom from './components/Devcom';
import Members from './components/Members';
import Join from './components/Join';
import About from './components/About';
import Edit from './components/Edit';


import Noteform from './components/Noteform';

import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (

    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Devcom/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/members" element={<Members/>} />
      <Route exact path="/join" element={<Join/>} />
      <Route exact path="/edit/:id" element={<Edit/>} />
      <Route element={<Noteform/>} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
