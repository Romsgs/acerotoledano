import React from "react";
import "./header.css";
export class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#bio">Biography</a>
            </li>
            <li>
              <a href="#music">Music</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#social">Social Media</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#lyrics">lyrics analisys</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
