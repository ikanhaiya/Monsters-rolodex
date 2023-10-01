import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import './App.css';

import { SearchBox } from './component/search-box/search-box.component';

class App extends Component{
    
  constructor() {
    super();

    this.state = {
       monsters: [

       ],
       searchField: ''
    };
  }


  componentDidMount(){
     
    fetch ('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
    
    
  }

  handleChange = (e) => {
    
    this.setState({searchField: e.target.value});
    
  }
   
  render(){
     {/*this is destructuring which equivalent to 
       const monsters = this.state.monsters;
       const searchField = this.state.monsters;

       this is to get constant copy of original array for searching purpose 
       so that original copy does not get affected
    */}
    const { monsters, searchField} = this.state;
     
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
   
    return (  
      <div className="App">
       
          {/* monsters works as attribute (property for props(object) in CardList component)
           */}
          {
            /* setState is asynchronous function resulting our serachfiled state will be one chracter behind*/
            /* onChange is synthetic event(Kind of fake DOM event) */
          }

         <SearchBox 
           placeholder='search monsters'
           handleChange={this.handleChange}
           
          />

        
        <CardList monsters = {filteredMonsters} />
          {/* Hello my name is kanhaiya sharma and i akm the student of the computer science and  */}
      </div>
    );
  }
}


export default App;
