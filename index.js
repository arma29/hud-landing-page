const myNav = document.getElementsByTagName('nav')[0];

function handleNavbarBg() {
  "use strict";
  const limit = 100;
  if (document.body.scrollTop >= limit || document.documentElement.scrollTop >= limit) {
    myNav.classList.add("js-navbar-bg");
  } else {
    myNav.classList.remove("js-navbar-bg");
  }
};

window.onscroll = handleNavbarBg

handleNavbarBg();