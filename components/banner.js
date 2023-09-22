class Banner extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class=banner>
            <div class='hero-text'>
                    <p>We offer the sweetest treats in town!</p>
                    <button class="banner-button" onclick="window.location.href='./menu.html'">Shop Now</button>
            </div>
        </div>
    `
    }
}
customElements.define('large-banner', Banner);
