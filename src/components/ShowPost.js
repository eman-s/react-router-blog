import React, {Component} from 'react';

export default class ShowPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'details': {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
      fetch(URL)
      .then(results => results.json())
      .then(data => {
        console.log('data is:',data);
        this.setState({
          details:data
        })
      })
  }
  render(){
    let formStyle={
      'backgroundColor': '#222',
      'height': '150px',
      'padding':' 20px',
      'color': '	#f765b8',
      'text-align': 'center',
      'margin': '0 auto'
    }
    let {details} = this.state
    return(
      <div style={formStyle}>
        <h1 style={{'text-transform':'uppercase'}}>{details.title}</h1>
        <h3>Posted by:{details.name}</h3>
          <p>{details.blog}</p>

      </div>
    )
  }
}
