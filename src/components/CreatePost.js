import React, {Component} from 'react';

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
      this.props.history.push('/')
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

    return(
      <div>
        <header>SPILL IT OUT</header>

        <form onSubmit={this.addToList} id="form" className="topBefore">

          <input onChange={this.handleNameChange} value={this.state.name} id="name" type="text" placeholder="NAME"/>
          <input onChange={this.handleTitleChange} value={this.state.title} id="email" type="text" placeholder="Title"/>
          <textarea onChange={this.handleBlogChange} value={this.state.blog} id="message" type="text" placeholder="MESSAGE"></textarea>
          <input id="submit" type="submit" value="GO!"/>

        </form>
      </div>


      //

    )
  }
}
