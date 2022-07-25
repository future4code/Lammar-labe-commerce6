import React, { useState } from "react"
import {Carrinho} from "../Carrinho";
import { Card } from "../Card";
import { AppContainer, ListContainer } from "./style";
import { Filters } from "../Filters";
import dadosList from "../../data/dados.json";


export function App() {
  
  const [dados] = useState(dadosList)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")

  
  return <AppContainer>
    <Filters
      query={query}
      minPrice={minPrice}
      maxPrice={maxPrice}
      sortingParameter={sortingParameter}
      order={order}
      setQuery={setQuery}
      setMinPrice={setMinPrice}
      setMaxPrice={setMaxPrice}
      setSortingParameter={setSortingParameter}
      setOrder={setOrder}
    />

    <ListContainer>
    
      {dados
        .filter(dado => {
          return dado.title.includes(query) || dado.description.includes(query)
        })
        .filter(dado => {
          return dado.price >= minPrice || minPrice === ""
        })
        .filter(dado => {
          return dado.price <= maxPrice || maxPrice === ""
        })
        .sort((currentDado, nextDado) => {
          switch (sortingParameter) {
            case "price":
              return currentDado.price - nextDado.price
            default:
              return currentDado.title.localeCompare(nextDado.title)
          }
        })
        .sort(() => {
          if (order === "asc") {
            return 0
          } else {
            return -1
          }
        })
        .map(dado => {
          return <Card key={dado.id} dado={dado} />
        })}
    </ListContainer>
  </AppContainer>
}