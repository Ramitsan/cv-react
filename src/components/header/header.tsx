import React from "react";
import avatar from '../../assets/avatar.jpg';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <h1>Portfolio of Irina Ramitsan</h1>
      <div className="header__info">
        <div className="avatar">
          <img className="avatar__img" src={avatar} alt="avatar" />
        </div>
        <section className="about-me">
          <div className="about-me__info">
            <h2 className="about-me__heading heading--second-level">About me</h2>
            <div className="about-me__text">
              <p>Hello! My name is Irina and I'm a web-developer. I like creating attractive, user-friendly sites
              with modern design. I have been constantly educating myself, improving my hard&soft skills. I like to work
              in a team and communicate with new people.</p>
              <p>If you need layout or development of sites or web applications, please contact me:</p>
            </div>
          </div>
          <div className="contacts">
            <h2 className="about-me__heading heading--second-level">Contacts</h2>
            <ul className="contacts__list contacts__list--main">          
              <li className="contacts__item contacts__item--email">
                <a className="contacts__link" href="mailto:ramitsan@gmail.com" target="_blank">ramitsan@gmail.com</a>
              </li>
              <li className="contacts__item contacts__item--telegram">
                <a className="contacts__link" href="https://t.me/ramitsan" target="_blank">Telegram</a>
              </li>
              <li className="contacts__item contacts__item--linkedin">
                <a className="contacts__link" href="https://www.linkedin.com/in/irina-ramitsan-007016187/" target="_blank">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h2 className="about-me__heading heading--second-level">Links</h2>
            <ul className="links__list">
              <li className=" links__item links__item--github">
                <a className="links__link" href="https://github.com/Ramitsan" target="_blank">GitHub</a>
              </li>
              <li className="links__item links__item--codewars">
                <a className="links__link" href="https://www.codewars.com/users/Ramitsan" target="_blank">Codewars</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  )
}