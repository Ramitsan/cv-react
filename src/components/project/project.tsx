import React from "react";

export function Project() {
  return (
    <figure className="projects__item">
    <a className="project__link" href="https://ramitsan.github.io/Technomart/" target="_blank">
      <h3 className="heading heading--third-level">Technomart</h3>
      <img src="img/technomart.jpg" alt="technomart" />
    </a>
    <figcaption className="technology">HTML, CSS, JavaScript 
      <span className="technology__details">pop-up windows, tabs, local storage, google maps, css-animations</span>
    </figcaption>
  </figure>
  )
}
 
