import React from "react";
import { Estilo,Filters } from "../Style";


export function Filtro(){
    return(
      <Estilo>
           <Filters> 
            Valor Mínimo:
            <input type={"number"} /> 
             </Filters>
            
             <Filters> 
            Valor Máximo:
            <input type={"number"} /> 
             </Filters>

             <Filters> 
            Busca por nome:
            <input type={"text"} /> 
             </Filters> 
      
      </Estilo>
);
}

export default Filtro