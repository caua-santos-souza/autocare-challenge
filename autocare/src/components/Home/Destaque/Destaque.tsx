import Link from 'next/link'; // Importando o Link do Next.js
import Image from 'next/image'; // Importando o componente Image do Next.js
import styles from './Destaque.module.css'; // Importando o CSS Module

const Destaque = () => {
    return (
        <section className={styles.Destaque}>
            <div className={styles.Destaque__Img}> 
                <Image 
                    src="/assets/mecanico feliz 1 1.svg" // Caminho relativo a partir da raiz do projeto
                    alt="mecanico feliz" 
                    layout="responsive" // Usando layout responsivo do Next.js
                    width={300} // Ajuste conforme necessário
                    height={500} // Ajuste conforme necessário
                />
            </div>
            <div className={styles.Destaque__Texto}>
                <h1>Comece Agora com o Autocare</h1>
                <p>
                    Dê o primeiro passo para uma experiência de <br />
                    manutenção veicular mais inteligente e eficiente <br />
                    com o Autocare. Conecte-se com um de nossos <br />
                    parceiros confiáveis e descubra como nosso <br />
                    sistema de autocuidado pode transformar a forma <br />
                    como você cuida do seu veículo.
                </p>
                <Link href="/login" className={styles.Destaque__Login}>
                    Faça já sua análise
                </Link>
            </div>
        </section>
    );
}

export default Destaque;
