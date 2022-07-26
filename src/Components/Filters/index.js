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
/*<span>
         <label htmlFo="sortingParameter">Ordenar por: </label>
         <select
            name="sortingParameter"
            value={props.sortingParameter}
            onChange={(ev) => props.setSortingParameter(ev.target.value)}
         >
            <option value="title">Título</option>
            <option value="price">Preço</option>
            <option value="dueDate">Prazo</option>
         </select>
      </span>

      <select
         value={props.order}
         onChange={(ev) => props.setOrder(ev.target.value)}
      >
         <option value={"asc"}>Crescente</option>
         <option value={"desc"}>Decrescente</option>

      </select>
      */