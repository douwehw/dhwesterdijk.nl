import React, { useEffect } from "react";

function scrollToTop() {
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
}

export default scrollToTop;

// StackOverflow my beloved <3
