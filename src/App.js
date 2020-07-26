import React, { Component } from 'react';
import Slider from './components/NetflixSlider';
import './App.scss';
import Axios from 'axios';

const movies = {
  "mylist": [
    {
      "title": "Futurama",
      "id": 1,
      "image": "http://cdn1.nflximg.net/webp/7621/3787621.webp",
      "imageBg": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
      "title": "The Interview",
      "id": 2,
      "image": "http://cdn1.nflximg.net/webp/1381/11971381.webp",
      "imageBg": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
      "title": "Gilmore Girls",
      "id": 3,
      "image": "http://cdn1.nflximg.net/webp/7451/11317451.webp",
      "imageBg": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],
  "recommendations": [
    {
      "title": "Family Guy",
      "id": 4,
      "image": "http://cdn5.nflximg.net/webp/5815/2515815.webp",
      "imageBg": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
      "title": "The Croods",
      "id": 5,
      "image": "http://cdn3.nflximg.net/webp/2353/3862353.webp",
      "imageBg": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
      "title": "Friends",
      "id": 6,
      "image": "http://cdn0.nflximg.net/webp/3200/9163200.webp",
      "imageBg": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mylist: movies["mylist"],
      recommlist: movies["recommendations"],
    };
  }


  async getDataAxios() {
    const response =
      await Axios.get("http://localhost:5000/mongo/api/v1/get/all")
    this.setState({
      mylist: response.data.mylist,
      recommlist: response.data.recommendations
    });
      console.log(response.data)
  }
  render() {
    this.getDataAxios();
    return (
      <div className="app">
        <div className="row">
          <div className="logo">
            <img src={"/images/logo.png"} width="100" height="50" />
          </div>
        </div>
        <h1 className="headerName">My List</h1>
        <Slider>
          {this.state.mylist.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        <h1 className="headerName">Recommended List</h1>
        <Slider>
          {this.state.recommlist.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
