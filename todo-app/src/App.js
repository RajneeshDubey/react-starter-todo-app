import React, { Component } from 'react';
import './App.css';
// import FirstComponent from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from "./components/learning-examples/ThirdComponent"
//import Counter from "./components/counter/Counter"
import TodoApp from "./components/seller-portal/SellerPortalApp"
import './bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter></Counter> */}
      <TodoApp/>
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My TODO app
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//       </div>
//     );
//   }
// }


export default App;

