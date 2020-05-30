import React, {Component} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BBody from '../body/BBody'

export default class Board extends Component {
  render() {
    return (
      <div>
        <Header />
        <BBody />
        <Footer />
      </div>
    )
  }
}
