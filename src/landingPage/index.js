import './style.css';

export default function LandingPage() {

    return (
        <div>

            <header>
                <div className="container-topo limitar-secao">
                    <img src="assets/barbearia-logo.png" alt="logomarca" />
                    <button>
                        <img src='assets/moon.png' alt="icone" />
                        Dark
                    </button>
                </div>
            </header>

            <section className="secao-banner"></section>

            <section>
                <div className="container-bemVindo limitar-secao">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className="pBemVindo"><span>
                        Nossa barbearia sempre oferece profissionais de qualidade e
                        estamos prontos para lidar com suas maiores expectativas.
                    </span></p>
                    <p className="pBemVindo">
                        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
                        uma equipe premiada que demonstrou o talento de mestres barbeiros
                        em vários concursos de estilo. Deixe nosso barbeiro ser seu
                        estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p className="assinatura">S. Kelly</p>
                </div>
            </section>
        </div>
    );
}