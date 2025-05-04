document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="site-header">
      <div class="header-content">
        <img src="frontend/images/logo.png" alt="Micro Bliss by A Logo" class="logo-circle" />
        <nav>
          <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="about.html">ABOUT</a></li>
            <li><a href="services.html">SERVICES</a></li>
            <li><a href="blog.html">BLOG</a></li>
            <li><a href="gallery.html">GALLERY</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer>
      <div class="footer-main">
        <div class="footer-left">
          <h3>Connect With Us</h3>
          <div class="social-links">
            <a href="https://instagram.com/yourusername" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com/yourusername" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="mailto:microblissbya@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        <div class="footer-center newsletter-section">
          <h2>Join Our Community</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit" class="submit-button">Subscribe</button>
          </form>
        </div>
        <div class="footer-right">
          <p>© 2025 Micro Bliss by A. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  `;

  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
});