<header class="header">
  <a href="" class="logo">marketo.</a>
  <nav class="navbar">
    <a href="#home">home</a>
    <a href="#services">services</a>
    <a href="#about">about</a>
    <a href="#contact">contact</a>
  </nav>
  <div id="menu-btn" class="fas fa-bars"></div>
</header>

/* csss */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;
}
.header .logo {
  font-size: 2.5rem;
  color: var(--black);
  font-weight: bolder;
}
.header .navbar a {
  font-size: 1.7rem;
  color: var(--light-color);
  margin-left: 2rem;
}
.header .navbar a:hover {
  color: var(--main-color);
}
#menu-btn {
  cursor: pointer;
  font-size: 2.5rem;
  padding: 1rem 1.3rem;
  border-radius: 0.5rem;
  color: var(--main-color);
  background: var(--bg);
  display: none;
}
#menu-btn:hover {
  color: #fff;
  background: var(--main-color);
}

/* media queries */

@media (max-width: 768px) {
  html {
    font-size: 52.5%;
  }
  #menu-btn {
    display: initial;
  }
  .header .navbar {
    position: absolute;
    top: 115%;
    right: 2rem;
    box-shadow: var(--box-shadow);
    border: var(--border);
    border-radius: 0.5rem;
    width: 30rem;
    transform: scale(0);
    transform-origin: top right;
    opacity: 0;
  }
  .header .navbar.active {
    transform: scale(1);
    opacity: 1;
  }
  .header .navbar a {
    font-size: 2rem;
    display: block;
    padding: 0.5rem;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .header .navbar a:hover {
    background: var(--main-color);
    color: #fff;
  }
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 
