import React,{Component} from 'react';

import './header.css'
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
  render(){
    return (
      <div className="nav">
          <div className="nav_first">
              <div>今日头条</div>
          </div>
        <ul>
          <li><NavLink to="/home" activeClassName="active">热点</NavLink></li>
          <li><NavLink to="/follow" activeClassName="active">政治</NavLink></li>
          <li><NavLink to="/column" activeClassName="active">经济</NavLink></li>
            <li><NavLink to="/Next1" activeClassName="active">军事</NavLink></li>
            <li><NavLink to="/Next2" activeClassName="active">文化</NavLink></li>
        </ul>
      </div>
    )
  }
}