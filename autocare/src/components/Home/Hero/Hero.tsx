import Link from 'next/link'; // Importando o Link do Next.js
import Image from 'next/image'; // Importando o componente Image do Next.js
import styles from './Hero.module.css'; // Importando o CSS Module

const Hero = () => {
    return (
        <section className={styles.Hero}>
            <div className={styles.Hero__texto}>
                <h1 className={styles.Hero__titulo}>Inicie sua jornada hoje mesmo!</h1>
                <p className={styles.Hero__conteudo}>
                    Entre em contato com um <br /> parceiro Autocare e veja como <br /> podemos ajudá-lo a alcançar <br />
                    seus objetivos de manutenção <br /> de maneira mais eficiente e <br /> eficaz. Não perca tempo, sua <br />
                    experiência com o Autocare <br /> começa agora!
                </p>
            </div>
            <div className={styles.Hero__Img__Botão}>
                <Image 
                    src="/assets/foto familia feliz.svg" // Caminho relativo a partir da raiz do projeto
                    alt="Familia feliz sentada no capô do carro" 
                    layout="responsive" // Usando layout responsivo do Next.js
                    width={500} // Ajuste conforme necessário
                    height={300} // Ajuste conforme necessário
                />
                <Link href="/cadastro" className={styles.Hero__Img__Botão__Botão}>
                    Comece Já <Image className={styles.Hero__Botão__Arrow} src="/assets/Arrow.svg" alt="Seta" layout="intrinsic" width={50} height={40} />
                </Link>
            </div>
        </section>
    );
}

export default Hero;
