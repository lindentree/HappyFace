import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLocation: [],
      temp: '',
      humidity: '',
      plants: '',
    };

    this.getLocation = this.getLocation.bind(this);
    this.getClimateData = this.getClimateData.bind(this);
    this.postInfo = this.postInfo.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation(){
    const geolocation = navigator.geolocation;
    
    geolocation.getCurrentPosition(

      (position) => {
          console.log( position.coords.latitude );
          console.log( position.coords.longitude );

          const newLocation = {
            set : true,
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
          }
          this.setState({ myLocation : newLocation });
          this.getClimateData(this.state.myLocation.longitude.toFixed(4), this.state.myLocation.latitude.toFixed(4));      }, 

      (error) => {
          console.log( error.message );
      }
    );
  }

  getClimateData(lon,lat) {
    const key = process.env.MYAPIKEY;
  
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)

      .then((data) => {
        const newWeatherData = {
          temp : data.data.main.temp,
          humidity : data.data.main.humidity
        }
        this.setState({ temp : newWeatherData.temp, humidity : newWeatherData.humidity });
        this.postInfo(this.state.temp, this.state.humidity)
      })

      .catch((err) => {
        console.log(err);
      })
  }

  getInfo() {
    axios.get('/plants')
      .then(data => {
        this.setState({
          plants: data
        });
      });
    } 

  postInfo(inputData){
    axios.post('/plants', inputData)
      .then(()=>{
        this.getInfo();
      });
    }

  render() {
    return (
      <div>
        <span>{this.state.myLocation.longitude}</span>
        <span>{this.state.myLocation.latitude}</span>
        <span>{this.state.temp}</span>
        <span>{this.state.humidity}</span>
        <span>{this.state.plants}</span> 
      </div>
    );
  }
}

export default App;