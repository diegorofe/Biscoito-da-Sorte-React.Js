import React, { Component } from 'react';
import Biscoito from './assets/biscoito.png'
import './style.css'


export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    textoFrase: ''
  };

  this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Quando sobra dinheiro no fim do mês, você fica pensando que conta esqueceu de pagar.',
    'Você descobre que tá ficando careca quando nota que o sabonete tem mais cabelo que você.', 
    'O importante não é ganhar',
    'o importante é competir sem perder e sem empatar.',
    'Pense como um boleto. Um boleto sempre vence!']

       
  }

  quebraBiscoito() {
    
let state = this.state;
let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
state.textoFrase = ' " ' + this.frases[numeroAleatorio ] + ' " '
this.setState(state)


  }


render(){
  return(
    <div className='container'>
      <img src={Biscoito} className='img'/>
      <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
      <h3 className='textoFrase'>{this.state.textoFrase}</h3>
    </div>

  );
}
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}