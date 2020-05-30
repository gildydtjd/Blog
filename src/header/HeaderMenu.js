import React, {Component } from 'react'
import './header.scss';
import { Link } from 'react-router-dom';
export default class HeaderMenu extends Component {
  render() {
    return (
      <div>
        <div className="topMenu">
          <div className="Top">
            Dragon Blog
          </div>
            <ul className="menu01">
                <Link to='/'><li><span>HOME</span></li></Link>
                <Link to='/Board'><li><span>BOARD</span></li></Link>
                <Link to='/Community'><li><span>COMMUNITY</span></li></Link>
                <Link to='Download'><li><span>DOWNLOAD</span></li></Link>
                <Link to='QandA'><li><span>Q&A</span></li></Link>
            </ul>
        </div>
        </div>
    )
  }
}