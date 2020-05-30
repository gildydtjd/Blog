import React, { Component } from 'react'
import './body.css'
import Community from './component/Board/Community'

export default class CBody extends Component {
  render() {
    return (
      <div className='bodyBox'>
        <p>Cbody</p>
        <Community />
      </div>
    )
  }
}
