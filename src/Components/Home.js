import React from "react";
import { Cabecalho, CardProdutos } from "../Style";
import Cards from "./Cards";

export function Home(){
    
    return(
        <>
        <Cabecalho>
        <p>Quantidade de Produto: 2</p>
        <label>
            Ordenação:
            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </label>
        </Cabecalho>

        <CardProdutos>
            <Cards/>
        </CardProdutos>
        </>


    )
}

export default Home;