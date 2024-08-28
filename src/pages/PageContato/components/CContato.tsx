"use client";

import { ExternoContainer } from "../../PageContato/components/CContatoStayled";
import Image from "next/image";

interface ContatoInter {
  src: string;
  titulo: string;
  descricao: string;
}

export function CContato(prop: ContatoInter) {
  return (
    <ExternoContainer> 
        
        <Image src={prop.src} width={30} height={30} alt="svg" />

      <div>
        <h1>{prop.titulo}</h1>
        <p>{prop.descricao}</p>
      </div>
    </ExternoContainer>
  );
}
