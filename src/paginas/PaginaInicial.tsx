import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contato from '../components/Contato/Contato';
import Destaque from '../components/PaginaInicial/Destaque/Destaque';
import FAQ from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/PaginaInicial/Hero/Hero';
import Vantagens from '../components/PaginaInicial/Vantagens/Vantagens';

const PaginaInicial = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

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
