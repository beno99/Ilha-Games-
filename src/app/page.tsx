import React from "react";
import { Hero } from "../pages/PageHero/Hero";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Sobre } from "@/pages/PageCard/Sobre";
import { Wrapper } from "@/styled/Wepper/wrapper";
import { Contato} from "@/pages/PageContato/index"


const Page: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero />
        <Sobre/>
        <Contato/>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Page;
