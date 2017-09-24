import React, {Component} from 'react';
import {Link} from 'react-router-dom'


export default class PostList extends Component{
  constructor(props){
    super(props)
    this.state = {
      'blogList':[]
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then(results => {
          return results.json();
        })
        .then((data) => {
          this.setState({
            blogList: data
          });
        });
  }
  render(){
    let listStyle={
      'backgroundColor': '#222',
      'padding':' 20px',
      'color': 'white',
      'text-align' : 'center',
      'text-transform' : 'uppercase'
    }
    console.log(this.state.blogList);
    let blogs = this.state.blogList
    let list = blogs.map((post) => {
      return(
        <div key={post._id} style={listStyle}>
          <Link to={`/show/${post._id}`}>{post.title}</Link>
        </div>
      )
    })
    return(
      <div >
      {list}
      </div>
    )
  }
}
