import React, { Component } from 'react';


export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    email: "usuario@email.com",
    senha: "12345"
   
  };

  this.trocaEmail = this.trocaEmail.bind(this)
  this.trocaSenha = this.trocaSenha.bind(this)
}

trocaEmail(e){

  let valorDigitado = e.target.value;
  this.setState({email: valorDigitado});
}

trocaSenha(e){

  let valorDigitado = e.target.value;
  this.setState({senha: valorDigitado})
}



render(){
  return(
    <div>
     <h3>Sistema de Login</h3>
     Email:
     <input onChange={this.trocaEmail}  type="email" value= {this.state.email} name="email"></input> <br/>
     Senha:
     <input onChange={this.trocaSenha}  type="password" value= {this.state.senha} name="senha"></input> <br/>
     Sexo:
     <select name="sexo" value={this.state.sexo} onChange={(e) =>
    this.setState({sexo: e.target.value})}>
       <option value="Masculino">Masculino</option>
       <option value="Feminino">Feminino</option>
     </select>
      <br/>
      <br/>
 
     <div>
    Verificação das states
       <h3>{this.state.email}</h3>
       <h3>{this.state.senha}</h3>
       <h3>{this.state.sexo}</h3>
     </div>
    </div>

  );
}

}