import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const images = [
  {
<<<<<<< HEAD
    original: `/assets/aloe_vera.png`,
  },
  {
    original: '/assets/peace_lily.jpg',
  },
  {
    original: '/assets/lavender-pot.jpg',
=======
    original: `https://verdetribe.com/wp-content/uploads/2020/02/VT_WebsiteImage27-1-1.jpg`,
    sizes: 200
    
  },
  {
    original: 'https://i.etsystatic.com/15265690/r/il/9c7e6c/1211862072/il_1588xN.1211862072_3kuo.jpg',
    sizes: 200
    
  },
  {
    original: 'https://www.gardeningknowhow.com/wp-content/uploads/2015/10/lavender-pot.jpg',
    sizes: 200
>>>>>>> main
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
<<<<<<< HEAD
        <ImageGallery items={images} />
=======
        <ImageGallery items={images} showThumbnails={false}/>
>>>>>>> main
      </div>
    )

    
  }



}