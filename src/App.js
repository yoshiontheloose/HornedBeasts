import React from 'react';
import './App.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json'
import SelectedBeast from './SelectedBeast.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      beast: {},
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          handleCloseModal={this.handleCloseModal}
        />
        <Footer />
      </>
    )
  }
}

export default App;


//NOTE: If you want to access state, use this.state.nameOfProperty
//NOTE: Changing state, use this.setState methods ({object property to be changed}) 
//NOTE: Define a property with a value of what state is EX: showModal={this.state.showModal}

//NOTE: 