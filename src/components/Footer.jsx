import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️ by <a href="https://timmybytes.com">Timothy Merritt</a>, {year}</p>
      <p>via <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">Angela Yu's Bootcamp</a></p>
    </footer>
  );
}

export default Footer;
