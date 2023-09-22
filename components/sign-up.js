class SignUpForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `
      <div class="form_wrapper">
      <div class="form_container">
          <div class="title_container">
              <h2>Sign-up Form</h2>
          </div>
          <div class="row clearfix">
          <div class="">
              <form>
                  <div class="row clearfix">
                      <div class="col_half">
                          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                              <input type="text" name="name" placeholder="First Name" />
                          </div>
                      </div>
                      <div class="col_half">
                          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                              <input type="text" name="name" placeholder="Last Name" required />
                          </div>
                      </div>
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="number" name = "age" min="10" max = "150" placeholder="Age" required />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                      <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
                      <input type="tel" name="phone" placeholder="(+84)123456789" pattern="\(\+84\)[0-9]{9}" required />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password" name="password" placeholder="Password" required />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password" name="password" placeholder="Re-type Password" required />
                  </div>
                  <div class="input_field radio_option">
                      <input type="radio" name="radiogroup1" id="rd1">
                      <label for="rd1">Male</label>
                      <input type="radio" name="radiogroup1" id="rd2">
                      <label for="rd2">Female</label>
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-map-marker"></i></span>
                      <input type="text" name="address" placeholder="Address" required />
                  </div>
                  <div class="input_field select_option">
                      <select>
                          <option>Select a country</option>
                          <option>Vietnam</option>
                          <option>Australia</option>
                      </select>
                      <div class="select_arrow"></div>
                  </div>
                  <div class="input_field checkbox_option">
                      <input type="checkbox" id="cb1">
                      <label for="cb1">I agree with terms and conditions</label>
                  </div>
                  <div class="input_field checkbox_option">
                      <input type="checkbox" id="cb2">
                      <label for="cb2">I want to receive the newsletter</label>
                  </div>
                  <input class="button" type="submit" value="Register" />
                  <input class="reset" type="reset" value="Reset" />
              </form>
          </div>
          </div>
      </div>
    </div>
    `
    }
}

customElements.define('signup-form', SignUpForm);
