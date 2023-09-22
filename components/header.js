class Nav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="nav-wrapper">
        <div class="logo">
            <a href="#" alt="brand_logo"><img src="./assets/logo.svg"></a>
        </div>
        <div class="nav-bar">
        <ul>
            <li><a href='./index.html'>Home</a></li>
            <li><a href='./menu.html'>Our Menu</a></li>
            <li><a href='./about.html'>About Us</a></li>
            <li><a href='./sign-up.html'>Sign Up</a></li>
        </ul>
        </div>
    </nav> `
    }
}

customElements.define('nav', Nav);

