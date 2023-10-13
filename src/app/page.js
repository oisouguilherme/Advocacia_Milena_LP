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
      {/* <NossaEquipe /> */}
      <FicouComDuvida />
      <EntreContato />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.244835176682!2d-43.94248345824528!3d-19.974011580542385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698047a256163%3A0xe6c905411d7e253c!2sR.%20da%20Vereda%2C%2050%20-%20Vila%20da%20Serra%2C%20Nova%20Lima%20-%20MG%2C%2034006-077!5e0!3m2!1spt-BR!2sbr!4v1697228828509!5m2!1spt-BR!2sbr" width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </div>
  )
}
