import React from "react";
import { CardContainer, InfoProdutos } from "../Style";

export function Cards(){
    return(
        <CardContainer>
            <img src={ 'https://img.elo7.com.br/product/main/2E39A86/camiseta-blusa-nasa-astronauta-espacial-espaco-agencia-g2.jpg'}/>
            {/* <img src={'https://img.elo7.com.br/product/main/2508E7B/camiseta-astronauta-filmes.jpg'}/>
            <img src={'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91k%2BmtKNtTL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png'}/>
            <img src={'https://http2.mlstatic.com/D_NQ_NP_826799-MLB47228428851_082021-O.webp'}/>
            <img src={'https://ae01.alicdn.com/kf/H4dfd4285e9fc4212a77dd4e26b2ceff3q/3d-espa-o-astronauta-t-camisa-das-crian-as-vestir-spacex-nave-espacial-t-camisa-meninos.jpg_q50.jpg'}/>
            <img src={'https://http2.mlstatic.com/D_NQ_NP_969016-MLB44529343743_012021-O.webp'}/> */}
        <InfoProdutos>
            <p>Produto</p>
            <p>R$:100,00</p>
            <button>Adicionar carinho</button>
        </InfoProdutos>
        </CardContainer>
    )
}

export default Cards;