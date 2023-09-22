class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!-- PAGE FOOTER -->
      <footer>
        <div class="upper-container">
          <div class="logo-footer">
            <a href="#"><img src="./assets/logo.svg" style="padding-top: 10px" alt="footer-logo"></a>
          </div>
          <div class="Support">
            <h4>Support</h4>
              <ul class="footer-tags">
                <li>FAQ</li>
                <li>Virtual Shopping</li>
                <li>Shipping and Returns</li>
                <li><a href="mailto:info@theccc.com.au">Contact us</a></li>       
              </ul>
          </div>
          <div class="Company">
            <h4>Company</h4>
              <ul class="footer-tags">
                <li>About us</li>
                <li>Stores</li>
                <li>What's new?</li>
                <li>Careers</li>
              </ul>
          </div>
          <div class="social-icon">
          <ul class="social-icon" style="list-style: none">
            <li><a href="https://www.facebook.com/ClassicCupcakeCo/"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/classiccupcakeco/?hl=en"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/the-classic-cupcake-co/?originalSubdomain=au"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
          <div class = "subcribe">
            <h4>Subscribe to our newsletter</h4>
              <form class="form">
                <input type="email" class="form__field" placeholder="Your Email-id Here">
                                <button type="button" class="btn btn--primary  uppercase">Send</button>
              </form>
          </div>
        </div>
        <div class = "bottom-container">
          <div class = "terms">
            <p>Terms and conditions</p>
          </div>
          <div class = "privacy">
            <p>Privacy Policy<p>
          </div>
          <div class = "copyright">
            <p>&copy; Copyright 2023 Classic Cupcake Co.</p>
          </div>
          <div class = "date">
            <p>Published on: Feb 25, 2023 12:00 PM GMT+7 </p>
            <p>Last Modified: March 7, 2023 12:00 PM GMT+7 </p>
          </div>
        </div>
      </footer>
    `
    }
}

customElements.define('main-footer', Footer);
