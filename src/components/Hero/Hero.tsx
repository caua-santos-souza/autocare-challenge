import FotoFamilia from './assets/foto familia feliz.svg'
import './Hero.css'
import arrow from './assets/Arrow.svg'

const Hero = () => {
    return (
        <section className="Hero">
            <div className="Hero__texto">
                <h1 className="Hero__titulo">Inicie sua jornada hoje mesmo!</h1>
                <p className="Hero__conteudo">Entre em contato com um <br /> parceiro Autocare e veja como <br /> podemos ajudá-lo a alcançar <br /> seus objetivos de manutenção <br /> de maneira mais eficiente e <br /> eficaz. Não perca tempo sua <br />experiência com o Autocare <br /> começa agora!</p>
            </div>
            <div className="Hero__Img__Botão">
                <img src={FotoFamilia} alt="Familia feliz sentada no capo do carro" />
                <a className='Hero__Img__Botão__Botão' href="/login">Comece Já <img className='Hero__Botão__Arrow' src={arrow}/> </a>
            </div>
        </section>
    )
}

export default Hero;