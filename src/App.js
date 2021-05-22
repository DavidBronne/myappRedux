import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  
  state= {
    ninjas:[
      {name:'Eliot', age:10, belt:'black', id:1},
      {name:'Cuicui', age:20, belt:'blue', id:2},
      {name:'Coucou', age:30, belt:'yellow', id:3}
    ]
  }

  render() {

    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
    
  }
}



export default App;
