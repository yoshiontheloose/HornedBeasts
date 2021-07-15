import React from 'react';

import HornedBeast from './HornedBeast.js';
// import data from './data.json'


class Main extends React.Component {
  render() {
    return (
      <main>
      <HornedBeast
      title="Jackalope"
      imageUrl="https://www.grunge.com/img/gallery/jackalope-the-truth-behind-the-worlds-scariest-rabbit/intro-1563483930.jpg"
      description="Spooky Bunny"
      />
      <HornedBeast
      title="Tauros"
      imageUrl="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/f/f7/Tauros.gif"
      description="A wild Tauros appears"
      />
      </main>
    )
  }
}

export default Main;  