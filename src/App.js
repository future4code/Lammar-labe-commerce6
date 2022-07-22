import React, {useState} from 'react';
import { Filtro } from './Components/Filtro';
import Home from './Components/Home';

import jobList from "./MockDados.json";



function App() {
  const [jobs] = useState(jobList) 

  return (
    <div >
      {/* <Filtro/> */}
      <Home/>
    </div>
  );
}

export default App;
