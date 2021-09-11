import React, { Component } from "react";

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

import './Feed.css';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Samuel dos Santos Batista </span>
              <span className="place">MG</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/06/post3-1024x877.jpg" alt="post imagem" />
        
          <footer>
            <div className="actions">
              <img src={like} alt="like" />
              <img src={comment} alt="Comentário" />
              <img src={send} alt="Enviar" />
            </div>
            
            <strong>900 curtidas</strong>

            <p>
              Um post muito massa da Omnistack
              <span>#react #omnistack</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;