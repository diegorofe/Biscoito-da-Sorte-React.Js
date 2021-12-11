import React, { Component } from 'react';


export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
      form: {

      nome: 'Diego',
      email: 'cadastro@email.com',
      senha: '123',
      sexo: 'Masculino'

      }
   
  }

  this.dadosForm = this.dadosForm.bind(this)


}

//função para mudar o state
dadosForm(e) {
  let form = this.state.form
  form[e.target.name] = e.target.value
  this.setState({form: form});
}


render(){
  return(
    <div>
        <h3>Sistema de Login</h3>
      Nome:
      <input type="text" name="nome" value={this.state.form.nome} 
      onChange={this.dadosForm}></input> <br/>
      Email:
      <input onChange={this.dadosForm}  type="email" value= {this.state.form.email} name="email"></input> <br/>
      Senha:
      <input onChange={this.dadosForm}  type="password" value= {this.state.form.senha} name="senha"></input> <br/>
      Sexo:
      <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>

      <div>
    Verificação das states
      <h3>{this.state.form.nome}</h3>
       <h3>{this.state.form.email}</h3>
       <h3>{this.state.form.senha}</h3>
       <h3>{this.state.form.sexo}</h3>
     </div>
    </div>

  );
}

}