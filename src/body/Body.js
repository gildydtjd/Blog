import React, { Component } from 'react'
import './body.css'
import HomeContent from './component/HomeContent/HomeContent';

export default class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }
  render() {
    return (
      <div className='bodyBox'>
        <HomeContent/>
      </div>
    )
  }
}
