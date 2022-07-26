import { CardContainer, CardFooter, CardContent } from "./style";


export function Card(props) {
   return <CardContainer>
              
        <h2 title={props.dado.title}>
          <u >{props.dado.title} </u>
      </h2>
            
      <CardContent
         title={props.dado.description}>
         {props.dado.description}
      </CardContent>
     
      <CardFooter>
         <span>&#128176; R$ {props.dado.price.toFixed(2).replace(".", ",")}</span>
        
      </CardFooter>
   </CardContainer>
}