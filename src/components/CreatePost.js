import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class CreatePost extends Component{
  constructor(props){
    super(props)
    this.state = {
      'name':'',
      'title':'',
      'blog':''
    }
    this.addToList = this.addToList.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBlogChange = this.handleBlogChange.bind(this)
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({
        'name': e.target.value,
        'title': e.target.value,
        'blog': e.target.value
      });
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
      this.setState({
        name: '',
        title: '',
        blog: ''
      });
  }

  handleNameChange(e){
    this.setState({
      name:e.target.value
    })
  }
  handleTitleChange(e){
    this.setState({
      title:e.target.value
    })
  }
  handleBlogChange(e){
    this.setState({
      blog:e.target.value
    })
  }


  render(){
    let formStyle={
      'backgroundColor': '#222',
      'height': '150px',
      'padding':' 20px',
      'color': 'white'
    }
    return(
    <div style={formStyle} >
      <form >
    <div className="form-group">
      <label>Name:</label>
      <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" placeholder="your name here"></input>
    </div>
    <div className="form-group">
      <label>Title:</label>
      <input onChange={this.handleTitleChange} value={this.state.title} type="text" className="form-control" placeholder="blog title"></input>
    </div>
    <div className="form-group">
      <label>BLOG:</label>
      <textarea onChange={this.handleBlogChange} value={this.state.blog} className="form-control" rows="3"></textarea>
    </div>
    <button onClick={this.addToList} type="submit" className="btn btn-primary">Submit</button>
  </form>
      </div>
    )
  }
}
