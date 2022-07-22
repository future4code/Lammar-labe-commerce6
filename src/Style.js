import styled from "styled-components"


//Filtro

export const Estilo = styled.div `
   border: 1px solid black;
   display: flex;
   flex-direction: column;
   padding: 10px;
   
` 
export const Filters = styled.div`
   
   display: flex;
   flex-direction: column;
   padding: 10px 0;

`
// Home

export const Cabecalho = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const CardProdutos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
margin-top: 10px;
`

// Cards

export const CardContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
`

export const InfoProdutos = styled.div`
display: flex;
flex-direction: column;
p{
   margin: 0 16px;
}
button{
   margin: 10px;
   align-self: center;
   width: 70%;
}
`
