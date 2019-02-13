import React from 'react'
import {addPost, updatePost} from '../api'

class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }




  handleSubmit (e) {
    e.preventDefault()
    const {post, history, fetchPosts} = this.props
    if (post) {
      updatePost(this.state)
        .then(fetchPosts)
        .then(() => history.push(`/posts/${post.id}`))
    } else {
      addPost(this.state)
        .then(newPost => {
          fetchPosts()
            .then(() => history.push(`/posts/${newPost.id}`))
        })
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <form className='pure-form pure-form-aligned' onSubmit={this.handleSubmit}>
        {this.props.post
          ? <h2 className='post-title'>Edit Post</h2>
          : <h2 className='post-title'>Add a New Blog Post</h2>
        }

        <fieldset>
          <div className='pure-control-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className='pure-control-group'>
            <label htmlFor='paragraphs'>Blog</label>
            <textarea
              name='paragraphs'
              value={this.state.paragraphs}
              onChange={this.handleChange}>
            </textarea>
          </div>

          <div className='pure-controls'>
            <input className='pure-button' type='submit' />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default PostForm