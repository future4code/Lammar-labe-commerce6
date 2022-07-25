import React from "react";
import { FiltersContainer, FiltersInput } from "./style";

export function Filters(props) {
   return <FiltersContainer>
      <h1>Filtros</h1>
      <h4> Valor mínimo:</h4>  
      <FiltersInput
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={(ev) => props.setMinPrice(ev.target.value)}
      />
      <h4> Valor máximo:</h4>
      <FiltersInput
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={(ev) => props.setMaxPrice(ev.target.value)}
      />
       <h4> Busca por Nome:</h4>
      <FiltersInput 
         placeholder="Pesquisa"
         value={props.query}
         onChange={(ev) => props.setQuery(ev.target.value)}
      />


   </FiltersContainer>

}

