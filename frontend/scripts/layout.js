document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <div class="scalloped-top"></div>
    <header class="site-header">
      <img src="frontend/images/logo.png" alt="Micro Bliss by A Logo" class="logo-circle" />
      <nav>
        <ul>
          <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
          <li><a href="about.html"><i class="fas fa-users"></i> About</a></li>
          <li><a href="services.html"><i class="fas fa-leaf"></i> Services</a></li>
          <li><a href="blog.html"><i class="fas fa-pen"></i> Blog</a></li>
          <li><a href="gallery.html"><i class="fas fa-image"></i> Gallery</a></li>
          <li><a href="contact.html"><i class="fas fa-envelope"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer>
      <div class="footer-main updated-layout">
        <!-- Left: Social Media -->
        <div class="footer-left">
          <h3>Social Media Accounts</h3>
          <div class="social-links">
            <a href="https://instagram.com/yourusername" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com/yourusername" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="mailto:microblissbya@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>

        <!-- Center: Newsletter -->
        <div class="footer-center newsletter-section">
          <h2>Join Our Joyful Community <i class="fas fa-bell"></i></h2>
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit" class="submit-button">Subscribe <i class="fas fa-paper-plane"></i></button>
          </form>
        </div>

        <!-- Right: Navigation & Copyright -->
        <div class="footer-right">
          <nav class="footer-nav">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <p>© 2025 Micro Bliss by A <i class="fas fa-paw"></i> | All Rights Reserved</p>
        </div>
      </div>
      <div class="scalloped-bottom"></div>
    </footer>
  `;

  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
});
