import React from 'react';

import HornedBeast from './HornedBeast.js';
import data from './data.json'


class Main extends React.Component {
  render() {
    // main component should pass props for the title, image and description to each horned beast element

    //forEach over the data and push into an array
    // renders beast data from json file
    let beastsToRender = [];
      
      data.forEach((beast, i) => {
        let hornedBeast = <HornedBeast
        key={i}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        />;

        beastsToRender.push(hornedBeast);
        });

    return (
      <main>
        {beastsToRender}
      </main>
    )
  }
}

export default Main;  