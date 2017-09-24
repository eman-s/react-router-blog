import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{
  render(){
    let navBarStyle={
      'backgroundColor': '#222',
      'padding':' 44px',
      'color': '#f98dc9',
      'display': 'flex',
      'justify-content':'space-between',
      'font-family': 'PressStart2PRegular',
      'font-weight': 'normal',
      'font-style': 'normal',
      'margin' : '0',

    }
    return(

      <div>
        <div className='navigation'>
          <section className='navLinks' style={navBarStyle}>
              <NavLink to='/create' activeStyle={{color:'#f765b8','text-decoration':'none'}}>Create Post</NavLink>
              <NavLink to='/show'  activeStyle={{color:'#f765b8','text-decoration':'none'}}>Show All Posts</NavLink>
          </section>
        </div>
        <section>
          {this.props.children}
        </section>

      </div>

    )
  }
}
