import React, { Component } from "react";
import api from "../services/api";

import './New.css';

class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  }
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state)
    const data = new FormData();
    data.append('image', this.state.image);
    data.append('author', this.state.author)
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);
    await api.post('posts', data);
    this.props.history.push('/');
  }

  handleChangeImage = e => {
    this.setState({
      image: e.target.files[0]
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <form id="new-post">
        <input type="file" onChange={this.handleChangeImage}/>
        <input 
          type="text"
          name="author"
          placeholder="Author do post"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input 
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input 
          type="text"
          name="description"
          placeholder="Description do post"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input 
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />
        <button type="submit" onClick={this.handleSubmit}>Enviar</button>
      </form>
    );
  }
}

export default New;