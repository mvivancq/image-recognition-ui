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
import { constants } from './Utils/Constants';
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
      box: [{}],
      user: JSON.parse(sessionStorage.getItem("user"))
    }
  }

  componentDidMount() {
    fetch(constants.apiHost)
  }

  loadUser = (data) => {
    let user = {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location.href = '/home';
  }
  calculateFaceLocation = (data) => {
    let boxes = [];
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    for(let region of data.regions){
      let clarifaiFace = region.region_info.bounding_box;
      let current = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
      boxes.push(current);
    }
    return boxes;
  }
  displayFaceBox = (box) => {
    this.setState({box: box});
  }
  onInputChange = (event) => {
    this.setState({inputText: event.target.value});
  }
  onSubmit = async () => {
    await this.setState({imageUrl: this.state.inputText});
    const response = await fetch(`${constants.apiHost}/imageData?IMAGE_URL=${this.state.imageUrl}`, {
      method: "GET"
    });
    const update = await fetch(`${constants.apiHost}/image`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        id: this.state.user.id
      }),
    });
    const count = await update.json();
    this.setState(Object.assign(this.state.user, {entries: count}))
    this.displayFaceBox(this.calculateFaceLocation(await response.json()));
  }
  render(){
    const router = createBrowserRouter([
      {
        path: "/",
        element:<>
          <Logo />
          <SignIn loadUser = { this.loadUser }/>
        </>,
      },
      {
        path: "/register",
        element: 
        <>
          <Logo />
          <Register loadUser = { this.loadUser }/>
        </>,
      },
      {
        path: "/home",
        element: 
        <>
          <Navigation />
          <Logo />
          <Rank user={this.state.user}/>
          <ImageLinkForm onInputChange = { this.onInputChange }  onSubmit = { this.onSubmit }/>
          <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>
        </>
      }
    ]);
    return (
      <div className="App">
        <ParticlesBg type="lines" bg={true} /> 
        <RouterProvider router={router} />
        
      </div>
    );
  }
}

export default App;
