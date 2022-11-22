
import './player.css'


const Colaborador = (props, corDeFundo) => {
    return (
    <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
        <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className='rodape'>
            <h4>NOME</h4>
            <h4>{props.nome}</h4>
            <h5>NICK</h5>
            <h5>{props.nick}</h5>
            <h4>DISCORD</h4>
            <h4>{props.discord}</h4>
        </div>
    </div>
    )
}

export default Colaborador