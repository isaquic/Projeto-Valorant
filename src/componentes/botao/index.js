import './botao.css'

const Botao = function (props){
    return (
        <button className='botao'>{props.children}</button>
    )
}

export default Botao