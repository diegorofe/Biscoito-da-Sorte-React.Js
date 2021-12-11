import React, { Component } from 'react';
import Feed from './components/feed';

export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    feed: [
      {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
      {id: 2, username: 'Diego', curtidas: 15, comentarios: 3},
      {id: 3, username: 'Amanda', curtidas: 8, comentarios: 12},
      {id: 4, username: 'Thais', curtidas: 1, comentarios: 0}
    ]
  };
}



render(){
  return(
    <div>
      {this.state.feed.map( (item) => {
        return(
          <Feed 
          id={item.id} 
          username={item.username} 
          curtidas={item.curtidas}
          comentarios={item.comentarios} />
        );
      })}
    </div>
  );
}

}