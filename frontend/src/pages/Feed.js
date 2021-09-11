import React, { Component } from "react";

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <seation id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Samuel dos Santos Batista</span>
              <span className="place">MG</span>
            </div>

            <img src={more} alt="Mais" />
          </header>
        </article>
      </seation>
    );
  }
}

export default Feed;