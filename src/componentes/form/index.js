import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campotexto'
import ListaSuspensa from '../ListaSuspensa'
import './form.css'


const Formulario = (props) => {


    const [nome, SetNome] = useState('')
    const [nick, SetNick] = useState('')
    const [discord, SetDiscord] = useState('')
    const [imagem, SetImagem] = useState('')
    const [classe, SetClasse] = useState('')
    

    const AoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            nick: nick,
            discord: discord,
            imagem: imagem,
            classe: classe
        })

        SetNome ('')
        SetNick ('')
        SetDiscord('')
        SetImagem ('')
        SetClasse ('') 
    }

    return(
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
            <h2>Preencha os Dados para Criar o Card </h2>
            <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu nome' 
                valor={nome}
                aoAlterado={valor => SetNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label='Nick' 
                placeholder='Digite seu nick' 
                valor={nick}
                aoAlterado={valor => SetNick(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label='Discord' 
                placeholder='Digite seu Discord' 
                valor={discord}
                aoAlterado={valor => SetDiscord(valor)}
            />
            <CampoTexto
                label='Imagem'
                placeholder='Seu melhor personagem'
                valor={imagem}
                aoAlterado={valor => SetImagem(valor)}
            />
            
            <ListaSuspensa 
                obrigatorio={true} 
                label='Classe' 
                itens={props.classes}
                valor={classe}
                aoAlterado={valor => SetClasse(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario