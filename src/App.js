import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DateInput from "./components/dateInput.js";
import Photo from "./components/photo.js"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  state = {
    date: "",
    photo: ""
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;
