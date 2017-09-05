import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{
  render(){
    let navBarStyle={
      'backgroundColor': '#222',
      'height': '150px',
      'padding':' 20px',
      'color': 'white',
    }
    return(

      <div>
        <section style={navBarStyle}>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to='/' activeStyle={{color:'yellow'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/create' activeClassName='selected'>Create Post</NavLink>
          </li>
          <li>
            <NavLink to='/show' activeClassName='selected'>Show All Posts</NavLink>
          </li>
        </ul>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>

    )
  }
}
