'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Contato from '../components/Compartilhados/Contato/Contato';
import Destaque from '../components/Home/Destaque/Destaque';
import FAQ from '../components/Compartilhados/Faq/Faq';
import Footer from '../components/Compartilhados/Footer/Footer';
import Header from '../components/Compartilhados/Header/Header';
import Hero from '../components/Home/Hero/Hero';
import Vantagens from '../components/Home/Vantagens/Vantagens';

const PaginaInicial = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, searchParams]); 

  return (
    <div>
      <Header />
      <Destaque />
      <Vantagens />
      <Hero />
      <FAQ />
      <Contato />
      <Footer />
    </div>
  );
}

export default PaginaInicial;
