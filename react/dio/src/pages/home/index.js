//import { useNavigate } from "react-router-dom";
import bannerImage from '../../assets/banner.png';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }


    return (
        <>
            <Header />
            <div className="Container">
                <div className="div">
                    <div className="Title">
                        <div className="TitleHighLight">
                            Implemente <br />
                        </div>
                        o seu futuro global agora!
                    </div>
                    <div className="TextContent">
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </div>
                   <Button title="Começar agora" variant="secundary" onclick={handleClickSignIn} />
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal da DIO" />
                </div>
            </div>
        </>
    )
}

export { Home }