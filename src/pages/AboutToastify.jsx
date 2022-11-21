import React from "react";
import toastLogo from "../assets/toast-logo.jpg";

function AboutToastify() {
  return (
    <section>
      <img src={toastLogo} alt="Toastify Logo" />
      <article>
        <p>
          React-Toastify allows you to add notifications to your app with ease.
          No more nonsense! Easy to set up for real, you can make it work in
          less than 10sec! Super easy to customize! Swipe to close 👌
        </p>
        <a
          href="https://fkhadra.github.io/react-toastify/introduction"
          target="_blank"
          rel="noreferrer"
        >
          <p>Learn more about Toastify!</p>
        </a>
      </article>
    </section>
  );
}

export default AboutToastify;
