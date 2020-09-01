import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️ by Timothy Merritt via Angela Yu's Bootcamp {year}</p>
    </footer>
  );
}

export default Footer;
