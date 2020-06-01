import React, { Component } from 'react';
import axios from 'axios';
import Pokeball from '../pokeball.png';

class Post extends Component {
  state = {
      post: null
  }
  componentDidMount(){
    console.log(this.props);
    let id = this.props.match.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        console.log(this.state.post.title);
      })
  }
  render(){
    const post = this.state.post ? (
      <div className="post card">
        <img src={Pokeball} alt="A pokeball"/>
        <div className="card-content">
          <span className="card-title red-text">{this.state.post.title}</span>
          <p className="center">{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <div className="container home center">
        <h4 className="title">Post Details</h4>
        {post}
      </div>
    );
  } 
}

export default Post;