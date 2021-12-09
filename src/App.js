import { render } from '@testing-library/react'
import React, { Component } from 'react'

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre nome={this.props.nome} idade={this.props.idade} cargo={this.props.cargo} />
        <Social fb={this.props.fb}/>
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component {
 
  render() {
    return (
      <div>
        <h2>Olá sou o {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );  
}
}
  
  


const Social = () => {

  return (
    <div>
      <a >Facebook </a>
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