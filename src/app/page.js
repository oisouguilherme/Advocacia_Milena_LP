"use client"
import { AreasTrabalho } from "@/components/AreasTrabalho";
import { BannerMain } from "@/components/BannerMain";
import { CardConceitos } from "@/components/CardConceitos";
import { EntreContato } from "@/components/EntreContato";
import { FicouComDuvida } from "@/components/FicouComDuvida";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { NossaEquipe } from "@/components/NossaEquipe";
import { SobreEscritorio } from "@/components/SobreEscritorio";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="bg-bege">

      <div className="bg-[url('/im4.webp')] bg-top bg-no-repeat bg-cover">
        <Header />
        <BannerMain />
      </div>
      <CardConceitos />
      <SobreEscritorio />
      <AreasTrabalho />
      <NossaEquipe />
      <EntreContato />
      <FicouComDuvida />
      <iframe id="Loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10712.112532266994!2d-46.432811267311905!3d-15.624140264145007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9356b3462ad43f17%3A0x4cb79de38c68a5ec!2sBuritis%2C%20MG%2C%2038660-000!5e0!3m2!1spt-BR!2sbr!4v1695485316232!5m2!1spt-BR!2sbr" width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      <Footer />
    </div>
  )
}
