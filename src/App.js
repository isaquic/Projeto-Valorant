
import { useState } from 'react';
import Banner from './componentes/banner/Banner';
import Classe from './componentes/Classe';
import Formulario from './componentes/form';



function App() {

  const classes = [
      {
        nome:'Controlador',
        corPrimaria:'#57c278',
        corSecundaria:'#D9F7E9'
      },
      {
        nome:'Duelista',
        corPrimaria:'#82CFFA',
        corSecundaria:'#E8F8FF'
      },
      {
        nome:'Iniciador',
        corPrimaria:'#E06B69',
        corSecundaria:'#FDE7E8'
      },
      {
        nome:'Sentinela',
        corPrimaria:'#FF8A29',
        corSecundaria:'#FFEEDF'
      }
    ]

  const [colaboradores, SetColaborador] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    
    SetColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario classes={classes.map(classes => classes.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
      {classes.map(classes =>  <Classe 
        key={classes.nome} 
        nome={classes.nome} 
        corPrimaria={classes.corPrimaria} 
        corSecundaria={classes.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.classe === classes.nome)}
        />)}
    </div>
  );
}

export default App;
