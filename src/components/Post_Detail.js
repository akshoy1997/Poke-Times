import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';
import { deletePost } from '../actions/deletePost'

class Post_Detail extends Component {
  handleClick = () => {
      this.props.deletePost(this.props.post.id);
      this.props.history.push('/posts/')
  }
  render(){
    const post = this.props.post ? (
      <div className="post card">
        <img src={Pokeball} alt="A pokeball"/>
        <div className="card-content">
          <span className="card-title red-text">{this.props.post.title}</span>
          <p>{this.props.post.body}</p>
          <div className="center delete">
              <button className="btn red" onClick={this.handleClick}>
                  Delete Post
              </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <div className="container home">
        <h4 className="title center">Post Details</h4>
        {post}
      </div>
    );
  } 
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post_Detail);