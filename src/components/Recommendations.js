import React from "react";

import imageSrc from '../assets/aloe_vera.png';

const Recommendations = ({ background, title, subtitle }) => (
  <div>
     <h1>Plant Recommendations</h1>
     <h2>Based on your local climate and mental health needs</h2>
     <div>
     <img title="my-img" src={imageSrc} alt="my-img" width={400} height={200}/> 
     <h4>Getting an aloe vera plant can purify the air in your home</h4>
     </div>


  </div>


);

export default Recommendations;