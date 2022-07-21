import React, {useState} from 'react';
import { Filtro } from './Components/Filtro';

import jobList from "./MockDados.json";



function App() {
  const [jobs] = useState(jobList) 

  return (
    <div >
      
      <Filtro/>
     
     
    </div>
  );
}

export default App;
