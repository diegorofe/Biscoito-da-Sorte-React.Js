import React, { Component } from 'react';

export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    status: false 
  };

  this.entrar = this.entrar.bind(this);
  this.sair = this.sair.bind(this);
}

entrar(){

  this.setState({status: true});
}

sair(){
 
  this.setState({status: false})  
}

render(){
  return(
    <div>
      {this.state.status ? 
      <div>
        <h2>Bem vindo ao Sistema</h2>
        <button onClick={this.sair}>sair</button>
      </div> :
      <div>
        <h2>Olá visitante! Faça o login</h2>
        <button onClick={this.entrar}>Entrar</button>
      </div>
      }
    </div>
  );
}

}