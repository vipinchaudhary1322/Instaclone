import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './landingpage';
import Daa from './postview';

import Addpost from './form';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landingpage/>}/>
    <Route path="/postview" element={<Daa/>}/>
    <Route path="/form" element ={<Addpost/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

