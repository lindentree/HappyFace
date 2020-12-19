import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: `/assets/aloe_vera.png`,
  },
  {
    original: '/assets/peace_lily.jpg',
  },
  {
    original: '/assets/lavender-pot.jpg',
  },
];

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {
    axios.get('/pong')
    .then(res => {
      alert(res);
    })
  }

  render() {
    return (
      <div>
        <h1>Plant Recommendations</h1>
        <h2>Based on your local climate and mental health needs</h2>
        <ImageGallery items={images} showThumbnails={false}/>
      </div>
    )

    
  }



}