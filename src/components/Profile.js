import React, { Component } from 'react';
import '../index.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      url: '',
      description: ''
    }
  }
  toHager = () => {
    this.setState((prevState) => {
      return {
        name: 'Hager',
        url: 'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/29792899_2017301515265036_3043165788485118667_n.jpg?_nc_cat=0&oh=251909d1f0acdf149fc0c0a1bf6374fe&oe=5BFC8802',
        description: 'Software Engineer'
      }
    })
  }
  toBalkis = () => {
    this.setState((prevState) => {
      return {
        name: 'Balkis',
        url: 'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/28871055_2114901608723009_952668744242642920_n.jpg?_nc_cat=0&oh=786d65f391ec932e60d3b3376e33e737&oe=5C049BE3',
        description: "I don't know tbh" 
      }
    })
  }
  toFiras = () => {
    this.setState((prevState) => {
      return {
        name: 'Firas',
        url: 'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/15941411_10205755204478998_6926445253908388339_n.jpg?_nc_cat=0&oh=2fe04cc99ae5d4d176ba2737f5921f9c&oe=5C3761FA',
        description: 'Civil Engineer'
      }
    })
  }
  render() {
    return (
      <div className="profile">
        <button onClick={this.toHager}> Hager </button>
        <button onClick={this.toFiras}> Firas </button>
        <button onClick={this.toBalkis}> Balkis </button>
        <br/>
        <img src={this.state.url} className="image" />
        <center><h3 className="name"> {this.state.name} </h3></center>
        <p> {this.state.description} </p>
      </div>
    );
  }
}

export default Profile;
