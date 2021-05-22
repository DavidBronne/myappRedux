import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  
  state= {
    ninjas:[
      {name:'Eliot', age:10, belt:'black', id:1},
      {name:'Cuicui', age:20, belt:'blue', id:2},
      {name:'Coucou', age:30, belt:'yellow', id:3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let newNinja = [...this.state.ninjas,ninja]
    this.setState({ninjas:newNinja})
    /* console.log('addNinja',this.state); */
    

    
  }

  render() {

    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
    
  }
}



export default App;
