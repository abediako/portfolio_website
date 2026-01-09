/*<section id="contact">*/
import './GetInTouch.css';

export default function GetInTouch() {
  return (
    <section id="contact" className="get-in-touch">
      <div className="content">
        <div className="text-section">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis turpis in nunc rutrum sollicitudin. Integer eu erat sit
            amet lorem iaculis dictum. Morbi posuere mi ipsum, eu scelerisque
            augue.
          </p>
        </div>

        <div className="contact-section">
          <form>
            <input type="text" placeholder="Name" required />

            <div className="two-column">
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" required />
            </div>

            <div className="two-column align-center">
              <div className="radio-group">
                <p>Preferred Contact Method</p>
                <label>
                  <input type="radio" name="contact"/> Phone
                </label>
                <label>
                  <input type="radio" name="contact" /> Email
                </label>
              </div>

              <input type="text" placeholder="How did you hear about me?" /> </div>
              
              <textarea placeholder="Your Message" required />

              <div className="button-row">
                <button type="submit" className="primary-button">
                  Send Message
                </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}