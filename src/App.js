import React from 'react'

const Equipe = (props) => {
  return(
  <div>
    <Sobre nome={props.nome} idade={props.idade} cargo={props.cargo} />
    <Social fb={props.fb}/>
    <hr/>
   </div>
  );
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb} >Facebook </a>
      <a>Linkedin </a>
      <a>Instagram </a>
    </div>
  );
}

function App() {
  return(
    <div>
      <h1>Conheça a nossa equipe</h1>
      <Equipe  nome="Diego"  cargo="Desenvolvedor" idade="33" fb="http://google.com"/>

    </div>
);
}

export default App;