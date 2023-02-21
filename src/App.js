import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import ParticlesBg from 'particles-bg';
import Rank from './Components/Rank/Rank';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import { Component } from 'react';
import {myresponse} from './Components/testResponse'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      inputText: "",
      imageUrl: "",
      box: {}
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box});
  }
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({inputText: event.target.value});
  }
  onSubmit = () => {
    this.setState({imageUrl: this.state.inputText});
    this.displayFaceBox(this.calculateFaceLocation(myresponse));
  }
  render(){
    const router = createBrowserRouter([
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "home",
        element: 
        <>
          <Rank />
          <ImageLinkForm onInputChange = { this.onInputChange }  onSubmit = { this.onSubmit }/>
          <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>
        </>
      }
    ]);
    return (
      <div className="App">
        <ParticlesBg type="lines" bg={true} /> 
        <Navigation />
        <Logo />
        <RouterProvider router={router} />
        
      </div>
    );
  }
}

export default App;
