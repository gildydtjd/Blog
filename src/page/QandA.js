import React, {Component} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import QBody from '../body/QBody'

export default class QandA extends Component {
  render() {
    return (
      <div>
        <Header />
        <QBody />
        <Footer />
      </div>
    )
  }
}
