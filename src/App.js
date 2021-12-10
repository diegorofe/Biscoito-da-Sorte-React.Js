import React, { Component } from 'react'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  //só é executado uma única vez, após a montagem
  componentDidMount() {

    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() } )
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Atualizou")
  }

  //retorna true ou false
  shouldComponentUpdate(){

  }
  
  render() {
    return (
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
       
      </div>
    );
  }
}

export default App