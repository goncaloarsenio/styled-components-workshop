import React from "react";
import scLogo from "../assets/sc-logo.png";

function AboutStyled() {
  return (
    <section>
      <img src={scLogo} alt="Styled Components Logo" />
      <article>
        <p>
          Utilising tagged template literals and the power of CSS,
          styled-components allows you to write actual CSS code to style your
          components. It also removes the mapping between components and styles
          - using components as a low-level styling construct could not be
          easier!
        </p>
        <a
          href="https://styled-components.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          <p>Learn more about Styled Components!</p>
        </a>
      </article>
    </section>
  );
}

export default AboutStyled;
