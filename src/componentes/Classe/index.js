import Colaborador from '../Player'
import './classe.css'

const Classe = (props) =>{
    return(
        (props.colaboradores.length > 0) &&
        <section className='classe' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    nick={colaborador.nick}
                    discord={colaborador.discord}   
                    imagem={colaborador.imagem}
                />) }
            </div>
        </section>
    )
}

export default Classe