import React from "react";
import UserLIst from "../components/users/users.js"
const Login = () => {
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       message: 'Click the button to load data!'
//     }
//   }
//   fetchData = () => {
//     axios.post('/api/user') // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       console.log('hi',response)
//       // handle success
//       //console.log(response.data) // The entire response from the Rails API
//       //console.log(response.data.message) // Just the message
//       this.setState({
//         message: response.data.message
//       });
//     }) 
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{ this.state.message }</h1>
//         <button onClick={this.fetchData} >
//           Fetch Data
//         </button>        
//       </div>
//     );
//   }
// }
// export default App;
    return (
    <div className="App">
  
<UserLIst/>
    </div>
    )
}

export default Login;