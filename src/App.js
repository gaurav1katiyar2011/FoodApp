import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
          <header class="header">
            <img src="img/logo.png" alt="Logo" class="header__logo" />
            <form class="search">
                <input type="text" class="search__field" placeholder="Search over 1,000,000 recipes..."/>
                <button class="btn search__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-magnifying-glass"></use>
                    </svg>
                    <span>Search</span>
                </button>
            </form>
            <div class="likes">
                <div class="likes__field">
                    <svg class="likes__icon">
                        <use href="img/icons.svg#icon-heart"></use>
                    </svg>
                </div>
                <div class="likes__panel">
                    <ul class="likes__list">
                        <li>
                            <a class="likes__link" href="#23456">
                                <figure class="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test" />
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">Pasta with Tomato ...</h4>
                                    <p class="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </header>
        
          </div>
    );
  }
}

export default App;
