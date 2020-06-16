import React ,{Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list-component.jsx"
import {SearchBox} from "./components/search-box/search-box.component.jsx"

class App extends Component{
  constructor(){
    super();
    this.state = {
        monster:[],
        searchField: ""
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monster:user}));
  }

  // arrow bind the value of this to where it is defined
  handleChange = (e) => { 
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monster, searchField} = this.state;
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder="Search Monster"
        handleChange = {this.handleChange}
        />
        <CardList monster = {filteredMonster} />
      </div>
    )
  }
}

export default App;
